import {
  Controller,
  Get,
  Param,
  UseGuards,
  Req,
  ForbiddenException,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiProperty,
} from '@nestjs/swagger'; // Import Swagger decorators
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard'; // Corrected path
import { Request } from 'express'; // Import Request type

// Interface to represent the user object attached by JwtAuthGuard
interface AuthenticatedUser {
  id: number;
  // Add other properties if present in JWT payload (e.g., email, roles)
}

// Interface to represent the Express Request object augmented with the user
interface RequestWithUser extends Request {
  user: AuthenticatedUser;
}

// DTO for Swagger documentation of the response body
class DashboardSummaryDto {
  @ApiProperty({ description: 'Number of content items in the campaign' })
  contentItemCount: number;

  @ApiProperty({ description: 'Number of pending media requirements' })
  pendingMediaNeedsCount: number;
}

// Applying the controller prefix and authentication guard
@ApiTags('Campaign Dashboard') // Group endpoints under this tag in Swagger UI
@Controller('campaigns/:campaignId/dashboard')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth() // Indicate that JWT Bearer token is required for all routes in this controller
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  // TODO: Add E2E tests for this endpoint after core MVP features are implemented.
  @Get('summary')
  @ApiOperation({ summary: 'Get campaign dashboard summary statistics' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved dashboard summary.',
    type: DashboardSummaryDto, // Document the response shape
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid Campaign ID format.',
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Authentication required. Missing or invalid token.',
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: 'User not authorized for this campaign.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Campaign not found.',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error retrieving summary.',
  })
  async getCampaignSummary(
    @Param('campaignId', new ParseUUIDPipe({ version: '4' })) campaignId: string,
    @Req() req: RequestWithUser, // Use Req decorator to access request object
  ): Promise<DashboardSummaryDto> { // Ensure method returns the documented DTO type
    const userId = req.user?.id; // Safely access user ID from request

    if (!userId) {
      // This should technically not happen if JwtAuthGuard is working correctly
      throw new ForbiddenException('Authentication token is invalid or missing user ID.');
    }

    return this.dashboardService.getCampaignSummary(campaignId, userId);
  }
} 