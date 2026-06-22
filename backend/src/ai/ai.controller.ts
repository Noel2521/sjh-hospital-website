import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

class ChatDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}

class DraftNewsDto {
  @IsString()
  @IsNotEmpty()
  bulletPoints: string;

  @IsOptional()
  @IsEnum(['NEWS', 'EVENT'])
  type?: 'NEWS' | 'EVENT';
}

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  // ── PUBLIC: Patient chatbot ──
  @Post('chat')
  chat(@Body() dto: ChatDto) {
    return this.aiService.chat(dto.message);
  }

  // ── ADMIN: Draft a news or event post from bullet points ──
  @Post('draft-news')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPER_ADMIN')
  draftNews(@Body() dto: DraftNewsDto) {
    return this.aiService.draftNewsPost(dto.bulletPoints, dto.type || 'NEWS');
  }

  // ── ADMIN: Get AI summary of today's appointments ──
  @Get('appointment-summary')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN', 'SUPER_ADMIN')
  appointmentSummary() {
    return this.aiService.summariseAppointments();
  }
}
