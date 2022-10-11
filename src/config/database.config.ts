import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [`src/models/*{.ts,.js}`],
  logging: false,
  synchronize: true,
  cli: {
    entitiesDir: "src/models",
  },
}; ;

export default config;
