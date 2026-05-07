import {
  CanActivate, ExecutionContext,
  Injectable, UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    const key = req.headers['x-api-key'];
    if (!key || !this.auth.isValidKey(key)) {
      throw new UnauthorizedException();
    }
    return true;
  }
}