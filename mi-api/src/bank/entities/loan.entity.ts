import {
  Entity, PrimaryGeneratedColumn, Column,
  ManyToOne, CreateDateColumn,
} from 'typeorm';
import { Account } from './account.entity';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'decimal' })
  rate: number;       // tasa anual ej. 0.12

  @Column()
  termMonths: number;

  @Column({ type: 'decimal' })
  monthlyPayment: number; // calculado al crear

  @ManyToOne(() => Account, (acc) => acc.loans)
  account: Account;

  @CreateDateColumn()
  createdAt: Date;
}