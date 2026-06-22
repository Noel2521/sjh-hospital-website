import { IsString, IsOptional, IsBoolean, IsInt, IsNotEmpty, IsArray } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsOptional()
  @IsString()
  designation?: string;

  @IsString()
  @IsNotEmpty()
  specialisation: string;

  @IsString()
  @IsNotEmpty()
  departmentId: string;

  @IsOptional()
  @IsString()
  qualifications?: string;

  @IsOptional()
  @IsInt()
  experienceYears?: number;

  @IsOptional()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  availableDays?: string[];

  @IsOptional()
  @IsString()
  consultationTime?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  displayOrder?: number;
}

export class UpdateDoctorDto extends CreateDoctorDto {}
