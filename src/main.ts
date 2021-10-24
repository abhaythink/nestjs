import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import keys from './config/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(keys.PORT ? keys.PORT : 3000);
}
bootstrap();
