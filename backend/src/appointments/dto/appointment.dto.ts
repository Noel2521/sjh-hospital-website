import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsEmail,
  IsInt,
  IsEnum,
  IsDateString,
  Min,
  Max,
} from 'class-validator';

export enum GenderEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  patientName: string;

  @IsString()
  @IsNotEmpty()
  patientPhone: string;

  @IsOptional()
  @IsEmail()
  patientEmail?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(120)
  patientAge?: number;

  @IsOptional()
  @IsEnum(GenderEnum)
  patientGender?: GenderEnum;

  @IsString()
  @IsNotEmpty()
  departmentId: string;

  @IsOptional()
  @IsString()
  doctorId?: string;

  @IsDateString()
  appointmentDate: string;

  @IsOptional()
  @IsString()
  preferredTime?: string;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class UpdateAppointmentStatusDto {
  @IsEnum(['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'])
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';

  @IsOptional()
  @IsString()
  adminNotes?: string;
}
