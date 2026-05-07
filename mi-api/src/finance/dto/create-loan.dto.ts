import {
  IsNumber, Min, Max, IsInt,
} from 'class-validator';

export class CreateLoanDto {
  @IsNumber()
  @Min(1)
  amount: number;

  @IsNumber()
  @Min(0)
  @Max(1)
  rate: number;       // 0.12 = 12 % anual

  @IsInt()
  @Min(1)
  termMonths: number;
}