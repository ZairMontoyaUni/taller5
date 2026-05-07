import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CircleQueryDto {
  @Type(() => Number)   // string → number (query params)
  @IsNumber()
  @Min(0)
  radius: number;
}