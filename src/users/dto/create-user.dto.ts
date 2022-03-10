import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(4, 100)
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @IsEmail({ message: 'email inválido' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(8, 12)
  senha: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(8, 12)
  confirmacaoSenha: string;
}
