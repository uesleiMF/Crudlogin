import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @UseGuards(AuthGuard())
  @Post('add/')
  create(@Body() data: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.create(data);
  }

  @Get('all')
  findAll(): Promise<any[]> {
    return this.filmesService.findAll();
  }

  @Get('filme/:id')
  findOne(@Param('id') id: string): Promise<Filme> {
    return this.filmesService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  update(
    @Param('id') id: string,
    @Body() data: UpdateFilmeDto,
  ): Promise<Filme> {
    return this.filmesService.update(id, data);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.filmesService.remove(id);
  }
}
