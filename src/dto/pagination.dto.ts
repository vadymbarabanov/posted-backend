import { IsInt, IsOptional, Min } from 'class-validator'

export class PaginationDTO {
  @IsInt()
  @Min(1)
  @IsOptional()
  page: number | undefined

  @IsInt()
  @Min(1)
  @IsOptional()
  limit: number | undefined
}
