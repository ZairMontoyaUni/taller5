import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiKeyGuard }     from '../auth/api-key.guard';
import { FinanceService }  from './finance.service';
import { CompoundDto }     from './dto/compound.dto';

@Controller('finance')
export class FinanceController {
  constructor(private finance: FinanceService) {}

  @Post('compound')
  @UseGuards(ApiKeyGuard)
  compound(@Body() dto: CompoundDto) {
    return this.finance.compound(dto);
  }
}