import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const configSchema = registerAs('config', () => {
  return {
    app: {
      baseUrl: process.env.BASE_URL,
      environment: process.env.ENVIRONMENT,
    },
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      name: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
  };
});

export const validationSchema = Joi.object({
  BASE_URL: Joi.string().required(),
  ENVIRONMENT: Joi.string()
    .valid('development', 'production', 'test')
    .required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().integer().positive().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
});
