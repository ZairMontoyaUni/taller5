import { Module }         from '@nestjs/common';
import { TypeOrmModule }   from '@nestjs/typeorm';
import { Account }         from './entities/account.entity';
import { Loan }            from './entities/loan.entity';
import { BankService }     from './bank.service';
import { BankController }  from './bank.controller';
import { AuthModule }      from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, Loan]), // registra los repos
    AuthModule,                                    // para el guard
  ],
  providers:   [BankService],
  controllers: [BankController],
})
export class BankModule {}