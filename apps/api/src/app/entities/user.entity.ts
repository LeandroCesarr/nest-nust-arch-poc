import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @Column({ name: 'created_at' })
  public createdAt: Date;

  @Column({ name: 'updated_at' })
  public updatedAt: Date;
}
