import { IsString, IsNotEmpty, IsEmail, Min, IsNumber, IsOptional } from 'class-validator';


export class CreatePostDto {


      @IsString()
      @IsNotEmpty()
      caption: string;
    
      @IsNumber()
      @Min(0)
      @IsOptional()
      likes: number;
}
