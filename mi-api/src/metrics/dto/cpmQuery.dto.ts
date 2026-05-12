import { IsNumber, Min, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

// Query DTO for CPM metrics
export class CpmQueryDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  cost: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  impressions: number;
}