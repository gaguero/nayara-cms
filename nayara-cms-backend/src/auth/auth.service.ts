import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service';
// Import DTOs later

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserCredentials(email: string, pass: string): Promise<any> {
    const user = await this.userService.validateUser(email, pass);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  async login(user: any) {
    // User object is assumed to be validated already
    const payload = { email: user.email, sub: user.id }; // Customize payload as needed
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: any): Promise<any> {
    // Check if user already exists (optional, could be DB constraint)
    // const existingUser = await this.userService.findUserByEmail(createUserDto.email);
    // if (existingUser) {
    //   throw new ConflictException('Email already registered');
    // }
    const newUser = await this.userService.createUser(createUserDto);
    // Optionally log in the user immediately after registration
    // return this.login(newUser);
    const { password, ...result } = newUser; // Don't return password
    return result; // Placeholder: Return created user data (without password)
  }
} 