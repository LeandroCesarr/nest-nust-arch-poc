import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  constructor(private readonly dataSource: DataSource) {}

  @Get()
  async index(): Promise<object> {
    try {
      await this.dataSource.query('SELECT 1');
      return { ok: true, message: 'DB is reachable!' };
    } catch (err) {
      return { ok: false, error: err.message };
    }
  }
}
