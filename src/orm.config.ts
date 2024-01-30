import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '0000',
  port: 5432,
  host: 'localhost',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
