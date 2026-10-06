import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // así no tenés que importar ConfigModule en cada módulo
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_DATABASE'),
        //entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: config.get<string>('NODE_ENV') !== 'production', // ojo con esto en prod
      }),
    }),
  ],
})
export class MysqlModule {}
