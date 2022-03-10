/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CredentialDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'Senha não pode ser vazio' })
  @Length(8, 15)
  senha: string;
}
