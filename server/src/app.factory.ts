import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import {
  swaggerDocumentOptions,
  swaggerPath,
  swaggerSetupOptions,
} from './swagger';
import { OpenAPIObject } from '@nestjs/swagger/dist/interfaces';
import * as fs from 'fs';

export const createAppInstance = async (): Promise<{
  app: INestApplication;
  document: OpenAPIObject;
}> => {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.setGlobalPrefix('v1');
  app.useGlobalPipes(
    new ValidationPipe({
      // Auto convert to object
      transform: true,

      // Auto stripping properties not that should not be received by the
      // method handler
      whitelist: true,
    })
  );

  const enableSwagger = process.env.ENABLE_SWAGGER === 'true';
  const document = SwaggerModule.createDocument(app, swaggerDocumentOptions);

  if (enableSwagger) {
    SwaggerModule.setup(swaggerPath, app, document, swaggerSetupOptions);
  }

  const exportOpenApiDocumentPath = process.env.EXPORT_OPENAPI_DOCUMENT_PATH;
  if (exportOpenApiDocumentPath) {
    fs.writeFileSync(
      exportOpenApiDocumentPath,
      JSON.stringify(document, null, 4)
    );
  }

  return { app, document };
};
