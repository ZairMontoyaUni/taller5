import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CalcModule } from './calc/calc.module';
import { FinanceModule } from './finance/finance.module';
import { BankModule } from './bank/bank.module';

@Module({ imports: [AuthModule, CalcModule, FinanceModule] })
export class AppModule {}
