import {
  IsString,
  IsEmail,
  IsOptional,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  @Length(4, 100)
  name: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
