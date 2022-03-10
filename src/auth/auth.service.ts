import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CredentialDto } from './dto/credential.dto';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService, private jwt: JwtService) {}

  async login(data: CredentialDto) {
    const userExist = await this.db.user.findUnique({
      where: { email: data.email },
    });

    if (!userExist) {
      throw new NotFoundException('usuário não encontrado');
    }

    const validaSenha = await bcrypt.compare(data.senha, userExist.senha);

    if (validaSenha) {
      const ticket = {
        email: userExist.email,
      };
      const token = await this.jwt.sign(ticket);
      return { token };
    } else {
      throw new UnauthorizedException('inválido');
    }
  }
}
