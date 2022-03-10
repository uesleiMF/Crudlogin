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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import AuthUser from './../auth/auth-user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add')
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.usersService.create(data);
  }

  @UseGuards(AuthGuard())
  @Get('usuario/:id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @UseGuards(AuthGuard())
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() data: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, data);
  }

  @UseGuards(AuthGuard())
  @Delete('delete/:id')
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.usersService.remove(id);
  }
  @UseGuards(AuthGuard())
  @Patch('addList/:id')
  addList(@AuthUser() user: User, @Param('id') filmeId: string) {
    return this.usersService.addList(user, filmeId);
  }
}
