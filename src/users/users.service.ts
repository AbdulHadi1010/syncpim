// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly Repository: Repository<User>,
  ) {}

  async createUser(username: string, password: string): Promise<User> {
    const user = new User();
    user.username = username;
    user.password = password;
    return this.Repository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.Repository.find();
  }
}
