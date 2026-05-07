import { IsNumber, Min } from 'class-validator';

export class CompoundDto {
  @IsNumber()
  @Min(0)
  principal: number; // capital inicial

  @IsNumber()
  @Min(0)
  rate: number;     // tasa anual (ej. 0.05 = 5%)

  @IsNumber()
  @Min(1)
  n: number;        // capitalizaciones por año

  @IsNumber()
  @Min(0)
  t: number;        // años
}