import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateCommentDto } from './dto/createComment.dto';

type PostRecord = {
  id: number;
  caption?: string;
  likes: number;
  userId?: number;
  comments: any[];
  createdAt: Date;
};

type CommentRecord = {
  id: number;
  content: string;
  author: string;
  createdAt: Date;
};

type PublicPostRecord = Omit<PostRecord, 'comments'>;

@Injectable()
export class PostsService {
  private posts: PostRecord[] = [];
  private nextId = 1;

  create(createPostDto: CreatePostDto) {
    const post: PostRecord = {
      id: this.nextId++,
      caption: createPostDto.caption,
      likes: createPostDto.likes ?? 0,
      comments: [],
      createdAt: new Date(),
    };
    this.posts.push(post);
    const { comments, ...publicPost } = post;
    return publicPost as PublicPostRecord;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((p) => p.id === id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const post = this.findOne(id);
    if (!post) return null;
    post.caption = updatePostDto.caption ?? post.caption;
    post.likes = updatePostDto.likes ?? post.likes;
    return post;
  }

  remove(id: number) {
    const idx = this.posts.findIndex((p) => p.id === id);
    if (idx === -1) return null;
    const [removed] = this.posts.splice(idx, 1);
    return removed;
  }

  // Create a post for a specific user
  createForUser(userId: number, dto: CreatePostDto) {
    const post: PostRecord = {
      id: this.nextId++,
      caption: dto.caption,
      likes: dto.likes ?? 0,
      userId,
      comments: [],
      createdAt: new Date(),
    };
    this.posts.push(post);
    const { comments, ...publicPost } = post;
    return publicPost as PublicPostRecord;
  }

  // Find posts by user
  findByUser(userId: number) {
    return this.posts.filter((p) => p.userId === userId);
  }

  // Add a comment to a post
  addComment(postId: number, dto: CreateCommentDto) {
    const post = this.findOne(postId);
    if (!post) return null;
    const comment: CommentRecord = {
      id: post.comments.length + 1,
      content: dto.content,
      author: dto.author,
      createdAt: new Date(),
    };
    post.comments.push(comment);
    return comment;
  }
}
