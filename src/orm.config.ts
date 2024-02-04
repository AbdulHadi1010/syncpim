import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://rkruemsl:STUCWSz4IbHaSO477l_W9eowJSS0BPdL@tai.db.elephantsql.com/rkruemsl',
  autoLoadEntities: true,
  synchronize: true,
};
