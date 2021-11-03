import { Injectable } from '@nestjs/common'
import { CreateUserDTO } from './dto/create-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersRepository {
  async findById(id: string) {
    return await User.findOne(id)
  }

  async createUser(body: CreateUserDTO) {
    return await User.create(body).save()
  }
}
