// src/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
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
  async findOne(username: string): Promise<User | undefined> {
    const options: FindOneOptions<User> = {
      where: {
        username: username,
      },
    };
    return this.Repository.findOne(options);
  }
}
