import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * Extracts the user object attached to the request by authentication guards (e.g., JwtAuthGuard).
 */
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    // Assumes the user object is attached to request.user by the Passport strategy
    return request.user;
  },
); 