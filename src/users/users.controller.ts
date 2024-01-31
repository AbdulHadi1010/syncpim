import { Controller, Body, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<User> {
    return this.usersService.createUser(username, password);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }
}