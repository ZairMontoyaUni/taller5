import {
  Entity, PrimaryGeneratedColumn, Column,
  OneToMany, CreateDateColumn,
} from 'typeorm';
import { Loan } from './loan.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner: string;

  @Column({ type: 'decimal', default: 0 })
  balance: number;

  @OneToMany(() => Loan, (loan) => loan.account)
  loans: Loan[];

  @CreateDateColumn()
  createdAt: Date;
}