import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [DatabaseModule, CommonModule],
})
export class ProductsModule {}
