import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto, UpdateAppointmentStatusDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  // ── PUBLIC: Book a new appointment ──
  async book(dto: CreateAppointmentDto) {
    // Block bookings for past dates
    const date = new Date(dto.appointmentDate);
    date.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) {
      throw new BadRequestException('Appointment date cannot be in the past.');
    }

    // Verify department exists
    const dept = await this.prisma.department.findUnique({ where: { id: dto.departmentId } });
    if (!dept) throw new BadRequestException('Invalid department selected.');

    // If a doctor is specified, verify they belong to that department
    if (dto.doctorId) {
      const doc = await this.prisma.doctor.findFirst({
        where: { id: dto.doctorId, departmentId: dto.departmentId, isActive: true },
      });
      if (!doc) throw new BadRequestException('Selected doctor is not available in that department.');
    }

    const referenceNo = this.generateReferenceNo();

    const appointment = await this.prisma.appointment.create({
      data: {
        referenceNo,
        patientName: dto.patientName,
        patientPhone: dto.patientPhone,
        patientEmail: dto.patientEmail,
        patientAge: dto.patientAge,
        patientGender: dto.patientGender,
        departmentId: dto.departmentId,
        doctorId: dto.doctorId,
        appointmentDate: new Date(dto.appointmentDate),
        preferredTime: dto.preferredTime,
        reason: dto.reason,
        status: 'PENDING',
      },
      include: { department: true, doctor: true },
    });

    // TODO: Send email confirmation once Resend is configured
    // await this.emailService.sendAppointmentConfirmation(appointment);
    // await this.emailService.notifyAdmin(appointment);

    return {
      success: true,
      referenceNo: appointment.referenceNo,
      message: `Appointment request received. Your reference number is ${appointment.referenceNo}. Our team will confirm within 2–4 hours.`,
    };
  }

  // ── ADMIN: Get all appointments with optional filters ──
  findAll(filters?: {
    status?: string;
    date?: string;
    departmentId?: string;
  }) {
    return this.prisma.appointment.findMany({
      where: {
        ...(filters?.status ? { status: filters.status as any } : {}),
        ...(filters?.date ? { appointmentDate: new Date(filters.date) } : {}),
        ...(filters?.departmentId ? { departmentId: filters.departmentId } : {}),
      },
      include: { department: true, doctor: true },
      orderBy: [{ appointmentDate: 'asc' }, { createdAt: 'desc' }],
    });
  }

  // ── ADMIN: Get today's appointments ──
  findToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    return this.prisma.appointment.findMany({
      where: {
        appointmentDate: { gte: today, lt: tomorrow },
      },
      include: { department: true, doctor: true },
      orderBy: { createdAt: 'asc' },
    });
  }

  // ── ADMIN: Update appointment status ──
  async updateStatus(id: string, dto: UpdateAppointmentStatusDto) {
    const appt = await this.prisma.appointment.findUnique({ where: { id } });
    if (!appt) throw new NotFoundException('Appointment not found.');

    return this.prisma.appointment.update({
      where: { id },
      data: { status: dto.status, adminNotes: dto.adminNotes },
    });
  }

  // ── ADMIN: Dashboard stats ──
  async getStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [total, todayCount, pending, confirmed] = await Promise.all([
      this.prisma.appointment.count(),
      this.prisma.appointment.count({ where: { appointmentDate: { gte: today, lt: tomorrow } } }),
      this.prisma.appointment.count({ where: { status: 'PENDING' } }),
      this.prisma.appointment.count({ where: { status: 'CONFIRMED' } }),
    ]);

    return { total, todayCount, pending, confirmed };
  }

  // ── Helpers ──
  private generateReferenceNo(): string {
    const year = new Date().getFullYear();
    const rand = Math.floor(10000 + Math.random() * 90000);
    return `SJH-${year}-${rand}`;
  }
}
