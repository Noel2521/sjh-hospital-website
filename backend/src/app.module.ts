import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    // Load .env variables first — everything else depends on this
    ConfigModule.forRoot({ isGlobal: true }),

    // Database (global — no need to import PrismaService separately in each module)
    PrismaModule,

    // Feature modules
    AuthModule,
    DepartmentsModule,
    DoctorsModule,
    AppointmentsModule,
    AiModule,
  ],
})
export class AppModule {}
