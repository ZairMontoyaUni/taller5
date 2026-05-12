import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type UserRecord = {
  id: number;
  username: string;
  bio?: string;
  followers?: number;
  createdAt: Date;
};

@Injectable()
export class UsersService {
  private users: UserRecord[] = [];
  private nextId = 1;

  create(createUserDto: CreateUserDto) {
    const user: UserRecord = {
      id: this.nextId++,
      username: createUserDto.username,
      bio: createUserDto.bio,
      followers: createUserDto.followers ?? 0,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id) ?? null;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (!user) return null;
    if (updateUserDto.username !== undefined) {
      user.username = updateUserDto.username;
    }
    if (updateUserDto.bio !== undefined) {
      user.bio = updateUserDto.bio;
    }
    if (updateUserDto.followers !== undefined) {
      user.followers = updateUserDto.followers;
    }
    return user;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return null;
    const [removed] = this.users.splice(index, 1);
    return removed;
  }
}
