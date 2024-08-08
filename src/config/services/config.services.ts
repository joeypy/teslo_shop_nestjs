import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { IConfigService } from '../interfaces/config.interface';

@Injectable()
export class ConfigService implements IConfigService {
  constructor(private nestConfigService: NestConfigService) {}

  get<T>(key: string): T {
    return this.nestConfigService.get<T>(key);
  }
}
