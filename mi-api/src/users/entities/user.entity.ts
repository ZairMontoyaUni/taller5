import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Post } from './post.entity';

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 100 })
	username: string;

	@Column({ type: 'text', nullable: true })
	bio?: string;

	@Column({ default: 0 })
	followers: number;

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany(() => Post, (post) => post.user)
	posts: Post[];
}

