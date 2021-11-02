import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true, length: 36 })
  username: string

  @Column({ unique: true, length: 254 })
  email: string

  @Column()
  password: string
}