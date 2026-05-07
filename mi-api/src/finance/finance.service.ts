import { Injectable } from '@nestjs/common';
import { CompoundDto } from './dto/compound.dto';

@Injectable()
export class FinanceService {

  compound(dto: CompoundDto) {
    const { principal, rate, n, t } = dto;
    return {
      amount: principal * ((1 + rate / n) ** (n * t)),
    };
  }
}