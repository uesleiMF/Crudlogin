import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(4, 100)
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(4, 500)
  diretores: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  legendas: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  idiomasAudio: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  duracao: string;

  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  imagem: string;

  @IsNumber()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  anoLancamento: number;
}
