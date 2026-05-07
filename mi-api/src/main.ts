import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,  // descarta campos no declarados en el DTO
      transform: true,  // convierte string→number en @Query()
    }),
  );

  await app.listen(3000);
}
bootstrap();