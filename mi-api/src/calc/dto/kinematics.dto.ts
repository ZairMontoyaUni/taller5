import { IsNumber } from 'class-validator';

export class KinematicsDto {
  @IsNumber()
  v0: number; // velocidad inicial (m/s)

  @IsNumber()
  a: number;  // aceleración (m/s²)

  @IsNumber()
  t: number;  // tiempo (s)
}