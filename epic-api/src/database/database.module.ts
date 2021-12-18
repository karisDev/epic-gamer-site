import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            // ConfigService позволяет нам читать настройки из .env
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('MYSQL_HOST'),
                username: configService.get('MYSQL_USER'),
                password: configService.get('MYSQL_PASSWORD'),
                database: configService.get('MYSQL_DB'),
                // entities - класс который описывает таблицы бд как классы с переменными
                entities: [__dirname + '/../**/*.entity.{ts,js}'], // чиатем все ts, js классы
                synchronize: true,
            }),
        }),
    ]
})

export class DatabaseModule {};
