import {
  IsString,
  IsNotEmpty,
  Length,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class UpdateFilmeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(4, 100)
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(4, 500)
  atores: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  @Length(4, 500)
  diretores: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  genero: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  legendas: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  idiomasAudio: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  duracao: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Imagem não pode ser vazio' })
  imagem: string;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty({ message: 'campo obrigatorio' })
  anoLancamento: number;
}
