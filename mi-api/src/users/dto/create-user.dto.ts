import { IsString, IsNotEmpty, IsEmail, Min, IsNumber, IsOptional } from 'class-validator';


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  bio: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  followers: number;


}
