import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  login(dto: LoginDto) {
    return { dto };
  }

  register(dto: RegisterDto) {
    return { dto };
  }

  refresh(dto: RefreshTokenDto) {
    return { dto };
  }
}
