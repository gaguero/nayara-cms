import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(
    private readonly configService: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: LoggerService,
  ) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception.getResponse();
    const isProd = this.configService.get<string>('NODE_ENV') === 'production';

    let errorPayload: string | object;
    let logMessage: string;

    if (isProd) {
      const message =
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null &&
        'message' in exceptionResponse &&
        typeof exceptionResponse.message === 'string'
          ? exceptionResponse.message
          : 'Internal server error';

      errorPayload = {
        statusCode: status,
        message,
        timestamp: new Date().toISOString(),
        path: request.url,
      };
      logMessage = `HTTP Exception: Status ${status} Path: ${request.url} Message: ${message}`;
      this.logger.error(logMessage, exception.stack, 'HttpExceptionFilter');
    } else {
      errorPayload = exceptionResponse;
      logMessage = `HTTP Exception: Status ${status} Path: ${request.url}`;
      this.logger.warn(logMessage, exceptionResponse, 'HttpExceptionFilter');
    }

    response.status(status).json(errorPayload);
  }
} 