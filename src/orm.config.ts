import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './users/entity/user-entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  username: 'postgres',
  password: '0000',
  port: 5432,
  host: 'localhost',
  database: 'testSyncpim',
  entities: [User],
  synchronize: true,
  schema: 'User',
};
