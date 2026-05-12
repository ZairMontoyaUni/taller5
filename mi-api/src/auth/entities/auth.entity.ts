import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('auth_keys')
export class Auth {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 255 })
	email: string;

	@Column({ length: 100 })
	apiKey: string;

	@CreateDateColumn()
	createdAt: Date;
}
