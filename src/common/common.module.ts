import { forwardRef, Module } from '@nestjs/common';
import { AppConfigModule } from 'src/config/config.module';
import { PaginationService } from './services/pagination.services';

@Module({
  providers: [PaginationService],
  imports: [forwardRef(() => AppConfigModule)],
  exports: [PaginationService],
})
export class CommonModule {}
