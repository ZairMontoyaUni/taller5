import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Comment } from '../../posts/entities/comment.entity';

@Entity('posts')
export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'text', nullable: true })
	caption?: string;

	@Column({ default: 0 })
	likes: number;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
	user: User;

	@OneToMany(() => Comment, (comment) => comment.post)
	comments: Comment[];
}
