import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '@/app/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly dataSource: DataSource) {}

  @Get()
  public async index(): Promise<User[]> {
    const repo = this.dataSource.getRepository(User);

    return await repo.find();
  }
}
