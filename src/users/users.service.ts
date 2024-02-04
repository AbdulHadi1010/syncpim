// src/users/users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user-entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UsersService {
  private userData = [];
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async createUser(createUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }

  async updateUserInfo(id: number, userInfo: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    } else {
      user.first_name = userInfo.first_name;
      user.last_name = userInfo.last_name;
      user.userType = userInfo.userType;
      user.brandName = userInfo.brandName;
      user.vatId = userInfo.vatId;
      user.representativeName = userInfo.representativeName;
      user.companyAddres = userInfo.companyAddres;
      user.packageId = userInfo.packageId;
      return this.userRepository.save(user);
    }
  }
  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
