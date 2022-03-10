import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    if (data.senha !== data.confirmacaoSenha) {
      throw new UnauthorizedException('senha incompatível');
    }

    const userExists = await this.db.user.findUnique({
      where: { email: data.email },
    });
    if (userExists) {
      throw new ConflictException('email cadastrado');
    }
    const saltos = 12;
    const hashDaSenha = await bcrypt.hash(data.senha, saltos);

    delete data.confirmacaoSenha;

    const user = await this.db.user.create({
      data: {
        ...data,
        senha: hashDaSenha,
      },
    });
    delete user.senha;
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('usuário não encontrado');
    }

    delete user.senha;
    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const user = await this.db.user.update({
      data,
      where: { id: id },
    });
    delete user.senha;
    return user;
  }

  async remove(id: string): Promise<{ message: string }> {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('usuário não encontrado');
    } else {
      await this.db.user.delete({
        where: { id },
      });
    }
    return {
      message: 'usuário excluído com sucesso',
    };
  }

  async addList(user: User, filmeId: string) {
    const filme = await this.db.filme.findUnique({
      where: { id: filmeId },
    });

    if (!filme) {
      throw new NotFoundException('filme não encontrado');
    }

    const usuario = await this.db.user.update({
      where: { id: user.id },
      data: {
        filme: {
          connect: {
            id: filme.id,
          },
        },
      },
      include: {
        filme: true,
      },
    });
    delete usuario.senha;
    return usuario;
  }
}
