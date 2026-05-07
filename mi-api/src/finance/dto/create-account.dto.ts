import {
  IsString, IsNotEmpty,
  IsNumber, Min, IsOptional,
} from 'class-validator';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  owner: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  balance?: number; // default 0 si no se envía
}