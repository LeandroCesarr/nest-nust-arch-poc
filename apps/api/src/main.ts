import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { OpenAiModule } from './setup/openAi';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  OpenAiModule.init(app);

  await app.listen(process.env.PORT ?? 3333);
}

void bootstrap();
