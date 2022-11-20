/* eslint-disable prettier/prettier */
export const ORMConfig = {
    name: 'default',
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'LaDecima2014',
  database: 'drumshop',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  // synch na produkcji false
};
