import 'dotenv/config';
import AppDataSource from '../data-source';
import { UsersSeed } from './scripts/users.seed';

async function runSeed() {
  const dataSource = await AppDataSource.initialize();

  console.log('🌱 Starting seed...');

  await UsersSeed.run(dataSource);

  console.log('🌱 Seed finished.');
  await dataSource.destroy();
}

runSeed().catch((err) => {
  console.error(err);
  process.exit(1);
});
