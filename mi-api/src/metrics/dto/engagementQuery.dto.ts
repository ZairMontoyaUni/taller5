import { IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

// Query DTO for engagement metrics
export class EngagementQueryDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  likes: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  comments: number;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  followers: number;
}