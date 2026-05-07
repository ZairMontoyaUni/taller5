import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository }               from '@nestjs/typeorm';
import { Repository }                      from 'typeorm';
import { Account }                          from './entities/account.entity';
import { Loan }                             from './entities/loan.entity';
import { CreateAccountDto } from 'src/finance/dto/create-account.dto';
import { CreateLoanDto } from 'src/finance/dto/create-loan.dto';


@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Account)
    private accountRepo: Repository<Account>,
    @InjectRepository(Loan)
    private loanRepo: Repository<Loan>,
  ) {}

  createAccount(dto: CreateAccountDto): Promise<Account> {
    const account = this.accountRepo.create({
      ...dto,
      balance: dto.balance ?? 0,
    });
    return this.accountRepo.save(account);
  }

  findAccounts(): Promise<Account[]> {
    return this.accountRepo.find({
      relations: ['loans'], // carga los préstamos de cada cuenta
    });
  }

  async createLoan(accountId: number, dto: CreateLoanDto): Promise<Loan> {
    const account = await this.accountRepo.findOneBy({ id: accountId });
    if (!account) throw new NotFoundException(`Cuenta ${accountId} no existe`);

    const r  = dto.rate / 12;
    const n  = dto.termMonths;
    const monthlyPayment =
      (dto.amount * r * (1 + r) ** n) / ((1 + r) ** n - 1);

    const loan = this.loanRepo.create({
      ...dto,
      monthlyPayment: +monthlyPayment.toFixed(2),
      account,
    });
    return this.loanRepo.save(loan);
  }

  async findLoans(accountId: number): Promise<Loan[]> {
    const account = await this.accountRepo.findOneBy({ id: accountId });
    if (!account) throw new NotFoundException(`Cuenta ${accountId} no existe`);
    return this.loanRepo.findBy({ account: { id: accountId } });
  }
}