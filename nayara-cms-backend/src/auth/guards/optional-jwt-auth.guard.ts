import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class OptionalJwtAuthGuard extends AuthGuard('jwt') {
  // Override handleRequest to allow unauthenticated users
  handleRequest(err, user, info, context, status) {
    // err: Error object if authentication fails
    // user: User object if authentication succeeds, false otherwise
    // info: Additional info (e.g., error message or JWTError)
    // context: ExecutionContext
    // status: HttpStatus code if provided by strategy

    // Do not throw an error if authentication fails, just return the user (which might be false)
    return user;
  }
} 