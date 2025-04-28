import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { HttpExceptionFilter } from './core/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true // Use Nest logger buffering until Winston is ready
  });
  
  // Use Winston logger instance provided by the module
  const logger = app.get<LoggerService>(WINSTON_MODULE_NEST_PROVIDER);
  app.useLogger(logger); 

  const configService = app.get(ConfigService);

  // CORS configuration
  const nodeEnv = configService.get<string>('NODE_ENV');
  const clientUrlDev = configService.get<string>('CORS_ORIGIN_DEV');
  const clientUrlProd = configService.get<string>('CORS_ORIGIN_PROD');
  
  const corsOrigin = nodeEnv === 'production' ? clientUrlProd : clientUrlDev;

  if (corsOrigin) {
    app.enableCors({
      origin: corsOrigin,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
      credentials: true,
    });
    logger.log(`CORS enabled for origin: ${corsOrigin}`);
  } else {
    logger.warn('CORS origin not set, CORS is disabled.');
  }

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.useGlobalFilters(new HttpExceptionFilter(configService, logger));

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
