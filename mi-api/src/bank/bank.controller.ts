import {
  Controller, Get, Post,
  Body, Param, ParseIntPipe, UseGuards,
} from '@nestjs/common';
import { ApiKeyGuard }      from '../auth/api-key.guard';
import { BankService }      from './bank.service';
import { CreateAccountDto } from 'src/finance/dto/create-account.dto';
import { CreateLoanDto } from 'src/finance/dto/create-loan.dto';


@Controller('bank')
@UseGuards(ApiKeyGuard)   // todos los endpoints de este controlador son privados
export class BankController {
  constructor(private bank: BankService) {}

  // POST /bank/accounts
  @Post('accounts')
  createAccount(@Body() dto: CreateAccountDto) {
    return this.bank.createAccount(dto);
  }

  // GET /bank/accounts  →  trae cuentas con sus préstamos
  @Get('accounts')
  findAccounts() {
    return this.bank.findAccounts();
  }

  // POST /bank/accounts/:id/loans
  @Post('accounts/:id/loans')
  createLoan(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateLoanDto,
  ) {
    return this.bank.createLoan(id, dto);
  }

  // GET /bank/accounts/:id/loans
  @Get('accounts/:id/loans')
  findLoans(@Param('id', ParseIntPipe) id: number) {
    return this.bank.findLoans(id);
  }
}