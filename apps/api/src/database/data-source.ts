import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '@/app/entities/user.entity';

config();

const AppDataSource = new DataSource({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  type: process.env.DB_DRIVER as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  migrations: [__dirname + '/migrations/*.ts'],
  migrationsRun: false,
  logging: true,
  entities: [User],
});

export default AppDataSource;
