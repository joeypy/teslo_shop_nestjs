import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PaginatedResult } from '../classes/paginated-result.class';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaginationService {
  constructor(private configService: ConfigService) {}

  async paginate<T>(
    repository: Repository<T>,
    options: {
      page?: number;
      limit?: number;
      offset?: number;
      route: string;
    },
  ): Promise<PaginatedResult<T>> {
    const page = options.page > 0 ? options.page : 1;
    const limit = options.limit > 0 ? options.limit : 10;
    const offset = options.offset >= 0 ? options.offset : (page - 1) * limit;

    const [data, total] = await repository.findAndCount({
      take: limit,
      skip: offset,
    });

    const totalPages = Math.ceil(total / limit);
    const currentPage = Math.floor(offset / limit) + 1;
    const baseUrl = this.configService.get<string>('config.app.baseUrl');
    const fullRoute = `${baseUrl}${options.route}`;

    return {
      data,
      meta: {
        totalItems: total,
        itemCount: data.length,
        itemsPerPage: limit,
        totalPages: totalPages,
        currentPage: currentPage,
        offset: offset,
      },
      links: {
        first: `${fullRoute}?page=1&limit=${limit}&offset=0`,
        previous:
          currentPage > 1
            ? `${fullRoute}?page=${currentPage - 1}&limit=${limit}&offset=${Math.max(0, offset - limit)}`
            : '',
        next:
          currentPage < totalPages
            ? `${fullRoute}?page=${currentPage + 1}&limit=${limit}&offset=${offset + limit}`
            : '',
        last: `${fullRoute}?page=${totalPages}&limit=${limit}&offset=${(totalPages - 1) * limit}`,
      },
    };
  }
}
