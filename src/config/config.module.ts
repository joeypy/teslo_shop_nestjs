import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configSchema, validationSchema } from './config.schema';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configSchema],
      validationSchema,
      validationOptions: {
        abortEarly: false,
      },
      envFilePath: '.env',
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
