import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { PrismaService } from 'src/prisma.service';
import { Filme } from '@prisma/client';

@Injectable()
export class FilmesService {
  constructor(private db: PrismaService) {}

  async create(data: CreateFilmeDto): Promise<Filme> {
    const filmeExists = await this.db.filme.findUnique({
      where: { name: data.name },
    });
    if (filmeExists) {
      throw new ConflictException('filme ja existe');
    }

    const filme = await this.db.filme.create({
      data: {
        ...data,
      },
    });
    return filme;
  }

  async findAll(): Promise<any[]> {
    return await this.db.filme.findMany();
  }

  async findOne(id: string): Promise<Filme> {
    const filme = await this.db.filme.findUnique({
      where: { id },
    });
    if (!filme) {
      throw new NotFoundException('filme não encontrado');
    }
    return filme;
  }

  async update(id: string, data: UpdateFilmeDto): Promise<Filme> {
    const filme = await this.db.filme.update({
      where: { id: id },
      data,
    });
    return filme;
  }

  async remove(id: string): Promise<{ message: string }> {
    const filme = await this.db.filme.findUnique({
      where: { id },
    });
    if (!filme) {
      throw new NotFoundException('filme não encontrado');
    } else {
      await this.db.filme.delete({
        where: { id },
      });
    }
    return {
      message: 'filme excluído',
    };
  }
}
