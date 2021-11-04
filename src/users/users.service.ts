import { Injectable } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { UsersRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async find() {
    return await this.usersRepository.find()
  }

  async findById(id: string) {
    return await this.usersRepository.findById(id)
  }

  async createUser(body: CreateUserDTO) {
    return await this.usersRepository.createUser(body)
  }
}
