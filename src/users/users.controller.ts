import { Controller, Post, Body, UsePipes, ValidationPipe, Put, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe)
  create(@Body() createUserDto: createUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Put(`:id`)
  @UsePipes(new ValidationPipe)
  update(@Param(`id`) id: string, @Body() updateUserDto: updateUserDto) {
    return this.usersService.update(+id, updateUserDto)
  }

  @Get(`:id`)
  findId(@Param(`id`) id: string) {
    return this.usersService.findId(+id)
  }

}
