import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Apply with @UseGuards(JwtAuthGuard) on any controller or route
 * that should only be reachable by a logged-in admin.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
