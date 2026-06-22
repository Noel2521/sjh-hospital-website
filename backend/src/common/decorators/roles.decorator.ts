import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export type AppRole = 'ADMIN' | 'SUPER_ADMIN';

/**
 * Usage: @Roles('ADMIN')
 * Place above any controller method that only admins should access.
 */
export const Roles = (...roles: AppRole[]) => SetMetadata(ROLES_KEY, roles);
