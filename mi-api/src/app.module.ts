import { TypeOrmModule } from '@nestjs/typeorm';
import { BankModule } from './bank/bank.module';
import { FinanceModule } from './finance/finance.module';
import { CalcModule } from './calc/calc.module';
import { AuthModule } from './auth/auth.module';
import { Account } from './bank/entities/account.entity';
import { Loan } from './bank/entities/loan.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:        'better-sqlite3',
      database:    'banco.db',     // archivo local
      entities:    [Account, Loan],
      synchronize: true,           // solo dev
    }),
    AuthModule,
    CalcModule,
    FinanceModule,
    BankModule,                    // ← nuevo
  ],
})
export class AppModule {}