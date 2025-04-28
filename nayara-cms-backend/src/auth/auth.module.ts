import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from '../core/prisma.service'; // Assuming UserService needs Prisma
import { AuthController } from './auth.controller'; // Import AuthController
// Import ConfigModule and ConfigService later

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule], // Import ConfigModule
      inject: [ConfigService], // Inject ConfigService
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Use JWT_SECRET from ConfigService
        signOptions: { 
          expiresIn: configService.get<string>('JWT_EXPIRATION') // Use JWT_EXPIRATION from ConfigService
        }, 
      }),
    }),
    ConfigModule, // Ensure ConfigModule is imported here if not global (it is global in app.module, but good practice)
  ],
  providers: [AuthService, UserService, JwtStrategy, PrismaService, ConfigService], // Add ConfigService here too
  controllers: [AuthController], // Add AuthController
  exports: [AuthService], // Export AuthService
})
export class AuthModule {} 