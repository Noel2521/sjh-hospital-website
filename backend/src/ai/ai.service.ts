import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AiService {
  private readonly apiKey: string;
  private readonly apiUrl = 'https://api.anthropic.com/v1/messages';
  private readonly model = 'claude-sonnet-4-6';

  constructor(
    private config: ConfigService,
    private prisma: PrismaService,
  ) {
    this.apiKey = this.config.get<string>('ANTHROPIC_API_KEY') || '';
  }

  // ═══════════════════════════════════════════════════════
  // PATIENT CHATBOT
  // Answers FAQs and routes patients to the right department.
  // Does NOT give medical diagnoses or medical advice.
  // ═══════════════════════════════════════════════════════
  async chat(message: string) {
    if (!this.apiKey) {
      return { reply: 'AI assistant is currently unavailable. Please call us at 0821-254 1122.' };
    }

    // Load active departments from DB so the AI knows what's available
    const departments = await this.prisma.department.findMany({
      where: { isActive: true },
      select: { name: true, slug: true, description: true },
    });

    const deptList = departments.map((d) => `- ${d.name}`).join('\n');

    const systemPrompt = `You are the virtual assistant for St. Joseph's Hospital, Bannimantap, Mysuru, Karnataka, India.
You help patients and visitors with:
- Finding the right department or specialist based on their described concern
- Answering general questions about visiting hours, parking, contact numbers, and hospital facilities
- Providing brief information about our health packages

STRICT RULES:
- You NEVER give medical diagnoses, prescribe medicines, or tell patients what treatment they need.
- If someone describes serious symptoms (chest pain, breathlessness, stroke signs, severe bleeding), immediately tell them to call 108 or go to Emergency.
- Always recommend consulting a doctor in person for any health concern.
- Keep responses short, warm, and clear. Maximum 3 short paragraphs.
- Respond in the same language the patient writes in (English or Kannada).
- If unsure, recommend calling: 0821-254 1122.

Available departments at St. Joseph's Hospital:
${deptList}

Hospital contact: 0821-254 1122 | Emergency: 108 | Address: Bannimantap, Mysuru – 570 015`;

    const response = await this.callClaude(systemPrompt, message);
    return { reply: response };
  }

  // ═══════════════════════════════════════════════════════
  // ADMIN CONTENT ASSIST
  // Helps admin staff write news/event posts from bullet points.
  // ═══════════════════════════════════════════════════════
  async draftNewsPost(bulletPoints: string, type: 'NEWS' | 'EVENT' = 'NEWS') {
    if (!this.apiKey) {
      throw new BadRequestException('AI service is not configured. Add ANTHROPIC_API_KEY to your .env.');
    }

    const systemPrompt = `You are a professional healthcare communications writer for St. Joseph's Hospital, Mysuru.
Write a polished hospital ${type.toLowerCase()} article based on the bullet points provided.
Format: Return a JSON object with exactly these fields:
{
  "title": "A clear, professional headline (max 80 chars)",
  "excerpt": "A 1–2 sentence summary for the news listing page (max 160 chars)",
  "content": "Full article body as HTML paragraphs using only <p>, <strong>, <ul>, <li> tags. Warm, professional tone. 150–300 words."
}
Return ONLY valid JSON. No markdown fences. No extra text before or after.`;

    const userMessage = `Write a hospital ${type.toLowerCase()} article from these notes:\n\n${bulletPoints}`;

    const raw = await this.callClaude(systemPrompt, userMessage);

    try {
      return JSON.parse(raw.replace(/```json|```/g, '').trim());
    } catch {
      return { title: '', excerpt: '', content: raw };
    }
  }

  // ═══════════════════════════════════════════════════════
  // ADMIN APPOINTMENT SUMMARY
  // Returns a plain-English summary of today's appointments.
  // ═══════════════════════════════════════════════════════
  async summariseAppointments() {
    if (!this.apiKey) {
      throw new BadRequestException('AI service is not configured.');
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const appointments = await this.prisma.appointment.findMany({
      where: { appointmentDate: { gte: today, lt: tomorrow } },
      include: { department: true, doctor: true },
      orderBy: { createdAt: 'asc' },
    });

    if (appointments.length === 0) {
      return { summary: 'No appointments are booked for today.' };
    }

    const apptData = appointments
      .map(
        (a) =>
          `- ${a.patientName} (${a.patientGender || 'Unknown'}, age ${a.patientAge || 'N/A'}) → ${a.department.name}${a.doctor ? ` with Dr. ${a.doctor.fullName}` : ''} at ${a.preferredTime || 'any time'} — Status: ${a.status}`,
      )
      .join('\n');

    const systemPrompt = `You are a hospital admin assistant. Summarise today's appointment list in 3–5 plain-English sentences. 
Note the total number of appointments, which departments are busiest, any pending confirmations, and anything requiring urgent action. 
Keep it brief and professional — this is read by the hospital admin at the start of the day.`;

    const summary = await this.callClaude(systemPrompt, `Today's appointments:\n${apptData}`);
    return { summary };
  }

  // ═══════════════════════════════════════════════════════
  // SHARED: Low-level Claude API call
  // ═══════════════════════════════════════════════════════
  private async callClaude(systemPrompt: string, userMessage: string): Promise<string> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: this.model,
        max_tokens: 1024,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      throw new BadRequestException(`AI API error: ${err}`);
    }

    const data = (await response.json()) as {
      content: Array<{ type: string; text: string }>;
    };

    return data.content
      .filter((c) => c.type === 'text')
      .map((c) => c.text)
      .join('');
  }
}
