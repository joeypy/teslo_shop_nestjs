import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AppConfigModule } from './config/config.module';
import { ProductsModule } from './products/products.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    ConfigModule,
    ProductsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigModule],
  exports: [ConfigModule],
})
export class AppModule {}
