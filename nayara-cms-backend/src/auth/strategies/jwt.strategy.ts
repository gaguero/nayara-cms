import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user.service'; // Assuming UserService is in the same module
// Import ConfigService later for secret key

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    // private configService: ConfigService, // Inject ConfigService later
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'YOUR_SECRET_KEY', // Placeholder - MUST be replaced via ConfigModule
    });
  }

  async validate(payload: any) {
    // Payload contains the decoded JWT (e.g., { userId: '...', email: '...' })
    // You might want to fetch the user from the DB to ensure they still exist/are active
    // const user = await this.userService.findById(payload.sub); // Example
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user; // Or just return the payload if it contains enough info
    return { userId: payload.sub, email: payload.email }; // Example: returning decoded payload
  }
} 