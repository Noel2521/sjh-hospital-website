import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  // Public: only active departments, ordered for display
  findAllPublic() {
    return this.prisma.department.findMany({
      where: { isActive: true },
      orderBy: { displayOrder: 'asc' },
    });
  }

  // Admin: everything, including inactive
  findAllAdmin() {
    return this.prisma.department.findMany({
      orderBy: { displayOrder: 'asc' },
    });
  }

  async findBySlug(slug: string) {
    const dept = await this.prisma.department.findUnique({
      where: { slug },
      include: { doctors: { where: { isActive: true } } },
    });
    if (!dept) throw new NotFoundException('Department not found.');
    return dept;
  }

  create(dto: CreateDepartmentDto) {
    return this.prisma.department.create({ data: dto });
  }

  async update(id: string, dto: UpdateDepartmentDto) {
    await this.ensureExists(id);
    return this.prisma.department.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.ensureExists(id);
    // Soft-delete pattern: deactivate instead of hard delete,
    // so historical appointments referencing this department stay intact.
    return this.prisma.department.update({ where: { id }, data: { isActive: false } });
  }

  private async ensureExists(id: string) {
    const dept = await this.prisma.department.findUnique({ where: { id } });
    if (!dept) throw new NotFoundException('Department not found.');
  }
}
