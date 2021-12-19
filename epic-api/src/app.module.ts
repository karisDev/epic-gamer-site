import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CollectionsModule } from './collections/collections.module';

// decorator
@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({
    validationSchema: Joi.object({
      MYSQL_HOST: Joi.string().required(),
      MYSQL_PORT: Joi.number().required(),
      MYSQL_USER: Joi.string().required(),
      MYSQL_PASSWORD: Joi.string().required(),
      MYSQL_DB: Joi.string().required(),
      JWT_SECRET: Joi.string().required(),
      JWT_EXPIRATION_TIME: Joi.string().required(),
    })
  }), UserModule, AuthModule, CollectionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
