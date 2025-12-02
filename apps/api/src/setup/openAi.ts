import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';

export class OpenAiModule {
  public static init(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle('Your API Title')
      .setDescription('Your API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    app.use(
      '/reference',
      apiReference({
        content: document,
      }),
    );
  }
}
