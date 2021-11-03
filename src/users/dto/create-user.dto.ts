import { IsEmail, Length, Matches } from 'class-validator'
import { VALID_USERNAME } from 'src/constants/patterns.constant'

export class CreateUserDTO {
  @Length(3, 36)
  @Matches(VALID_USERNAME)
  username: string

  @IsEmail()
  email: string

  @Length(6, 254)
  password: string
}
