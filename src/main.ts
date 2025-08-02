import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { NextFunction, Request, Response } from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use((req: Request, res: Response, next: NextFunction) => {
    (res as any).setHeader('X-Frame-Options', 'DENY');
    (res as any).setHeader('X-Content-Type-Options', 'nosniff');
    (res as any).setHeader('X-XSS-Protection', '1; mode=block');
    next();
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
