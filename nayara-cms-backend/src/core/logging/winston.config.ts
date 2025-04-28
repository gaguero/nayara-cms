import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

// Simple check for production environment
const isProduction = process.env.NODE_ENV === 'production';

// Basic Winston configuration
export const winstonConfig: winston.LoggerOptions = {
  level: isProduction ? 'info' : 'silly', // Log more in dev
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }), // Log stack traces
    winston.format.splat(),
    // Use JSON format in production, pretty print otherwise
    isProduction ? winston.format.json() : winston.format.json(),
  ),
  transports: [
    // Console transport - always active, format depends on environment
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        // Use Nest-like formatting in development
        isProduction 
          ? winston.format.json() 
          : nestWinstonModuleUtilities.format.nestLike('NayaraCMS', { 
              colors: true, 
              prettyPrint: true 
            }),
      ),
    }),

    // File transport - only in production
    ...(isProduction ? [
      new DailyRotateFile({
        filename: 'logs/application-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        level: 'info', // Log info and above to the main file
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json() // Log JSON to files
        ),
      }),
      new DailyRotateFile({
        filename: 'logs/error-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        zippedArchive: true,
        maxSize: '20m',
        maxFiles: '14d',
        level: 'error', // Log only errors to this file
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.json()
        ),
      }),
    ] : []),
  ],
  // Optional: Handle exceptions and rejections
  // exceptionHandlers: [ ... ],
  // rejectionHandlers: [ ... ],
}; 