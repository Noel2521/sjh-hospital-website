import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow the Next.js frontend (and admin dashboard) to call this API
  app.enableCors({
    origin: [
      'http://localhost:3000',                   // local dev
      'https://sjhmysuru.com',                   // production domain
      'https://www.sjhmysuru.com',
      process.env.FRONTEND_URL || '',            // set in Railway env vars
    ].filter(Boolean),
    credentials: true,
  });

  // Auto-validate all incoming request bodies against the DTO classes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,       // strips fields not in the DTO
      forbidNonWhitelisted: true,
      transform: true,       // auto-converts strings to numbers, dates etc.
    }),
  );

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🏥 SJH API running on http://localhost:${port}`);
}

bootstrap();
