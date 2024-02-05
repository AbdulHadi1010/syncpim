// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user-entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async updateUserInfo(
    id: number,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.keys(updateUserDto).forEach((key) => {
      if (updateUserDto[key] !== undefined) {
        user[key] = updateUserDto[key];
      }
    });
    return this.userRepository.save(user);
  }
  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  async findOne(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
