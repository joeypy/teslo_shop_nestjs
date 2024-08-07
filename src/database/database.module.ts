import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from 'src/products/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const db = configService.get('config.database');
        const app = configService.get('config.app');

        return {
          type: 'postgres',
          host: db.host,
          port: db.port,
          username: db.username,
          password: db.password,
          database: db.name,
          autoLoadEntities: true,
          synchronize: app.environment === 'development',
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
