import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 30 })
  email: string;
  @Column({ type: 'varchar', length: 50 })
  password: string;
  @Column({ type: 'varchar', length: 25, default: 'Unknown' })
  first_name: string;
  @Column({ type: 'varchar', length: 25, default: 'Unknown' })
  last_name: string;
  @Column({
    type: 'enum',
    enum: ['Individual', 'Company', 'Unknown'],
    default: 'Unknown',
  })
  userType: string;
  @Column({ type: 'varchar', length: 30, default: 'Unknown' })
  brandName: string;
  @Column({ type: 'varchar', length: 50, default: 'Unknown' })
  vatId: string;
  @Column({ type: 'varchar', length: 50, default: 'Unknown' })
  representativeName: string;
  @Column({ type: 'varchar', length: 50, default: 'Unknown' })
  companyAddres: string;
  @Column({ type: 'varchar', length: 50, default: 'Unknown' })
  packageId: string;
}
