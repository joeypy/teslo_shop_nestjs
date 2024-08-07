import { ApiProperty } from '@nestjs/swagger';

export class PaginationMeta {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  itemCount: number;

  @ApiProperty()
  itemsPerPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  currentPage: number;
}

export class PaginationLinks {
  @ApiProperty()
  first: string;

  @ApiProperty()
  previous: string;

  @ApiProperty()
  next: string;

  @ApiProperty()
  last: string;
}

export class PaginatedResult<T> {
  @ApiProperty({ isArray: true })
  data: T[];

  @ApiProperty()
  meta: PaginationMeta;

  @ApiProperty()
  links: PaginationLinks;
}
