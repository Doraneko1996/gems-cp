import { SetMetadata } from '@nestjs/common';
import { UserRole } from './roles.enum';

export const Role = (...roles: UserRole[]) => SetMetadata('roles', roles);