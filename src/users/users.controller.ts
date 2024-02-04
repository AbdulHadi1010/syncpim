import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Put()
  updateUser(
    @Query('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    console.log(id);
    return this.usersService.updateUserInfo(id, updateUserDto);
  }
  // @Post()
  // createUser(@Body() creatreUserDto: CreateUserDto) {
  //   return this.usersService.createUser(creatreUserDto);
  // }
}
