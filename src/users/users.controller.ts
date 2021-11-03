import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.usersService.findById(id)
  }

  @Post()
  async create(@Body() body: CreateUserDTO) {
    return await this.usersService.createUser(body)
  }
}
