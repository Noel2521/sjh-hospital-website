import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDto, UpdateDoctorDto } from './dto/doctor.dto';

@Injectable()
export class DoctorsService {
  constructor(private prisma: PrismaService) {}

  findAllPublic(departmentSlug?: string) {
    return this.prisma.doctor.findMany({
      where: {
        isActive: true,
        ...(departmentSlug ? { department: { slug: departmentSlug } } : {}),
      },
      include: { department: true },
      orderBy: { displayOrder: 'asc' },
    });
  }

  findAllAdmin() {
    return this.prisma.doctor.findMany({
      include: { department: true },
      orderBy: { displayOrder: 'asc' },
    });
  }

  async findBySlug(slug: string) {
    const doctor = await this.prisma.doctor.findUnique({
      where: { slug },
      include: { department: true },
    });
    if (!doctor) throw new NotFoundException('Doctor not found.');
    return doctor;
  }

  create(dto: CreateDoctorDto) {
    return this.prisma.doctor.create({ data: dto });
  }

  async update(id: string, dto: UpdateDoctorDto) {
    await this.ensureExists(id);
    return this.prisma.doctor.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.ensureExists(id);
    return this.prisma.doctor.update({ where: { id }, data: { isActive: false } });
  }

  private async ensureExists(id: string) {
    const doctor = await this.prisma.doctor.findUnique({ where: { id } });
    if (!doctor) throw new NotFoundException('Doctor not found.');
  }
}
