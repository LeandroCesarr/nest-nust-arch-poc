/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../../../app/entities/user.entity';
import { ulid } from 'ulid';

export class UsersSeed {
  public static async run(dataSource: DataSource): Promise<void> {
    const repo = dataSource.getRepository(User);

    const exists = await repo.count();

    if (exists) return;

    const admin = repo.create({
      id: ulid(),
      name: 'Admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('123456', 10),
    });

    const dummyUsers = Array.from({ length: 100 }).map((c, idx) =>
      repo.create({
        id: ulid(),
        email: `dummy_${idx}@dummy.com`,
        name: `Dummy - ${idx}`,
        password: 'lorem',
      }),
    );

    await repo.save([admin, ...dummyUsers]);

    console.log('🧪 Users seed created succesfuly.');
  }
}
