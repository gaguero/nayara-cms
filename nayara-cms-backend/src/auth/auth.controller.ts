import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RateLimit } from 'nestjs-rate-limiter';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
// Import User entity/type if needed for CurrentUser type hint

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @RateLimit({
    points: 10,
    duration: 60 * 15,
    errorMessage: 'Too many login attempts, please try again later.'
  })
  @Post('login')
  async signIn(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUserCredentials(
      loginDto.email,
      loginDto.password,
    );
    return this.authService.login(user);
  }

  @RateLimit({
    points: 5,
    duration: 60 * 60,
    errorMessage: 'Too many accounts created from this IP, please try again later.'
  })
  @Post('register')
  async signUp(@Body() createUserDto: CreateUserDto) {
    // Consider adding ConflictException handling if email exists
    return this.authService.register(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('status')
  getProfile(@CurrentUser() user: any) { // Use CurrentUser decorator
    // 'user' will contain the payload returned by JwtStrategy.validate
    // Or the full user object if you modified the strategy
    return user;
  }
} 