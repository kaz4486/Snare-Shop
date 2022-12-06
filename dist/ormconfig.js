"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORMConfig = void 0;
const dotenv = require("dotenv");
dotenv.config();
exports.ORMConfig = {
    name: 'default',
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};
//# sourceMappingURL=ormconfig.js.map