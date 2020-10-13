import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('orphanages')
export default class Orphanages {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'decimal', scale: 10, precision: 2 })
  latitude: number;

  @Column({ type: 'decimal', scale: 10, precision: 2 })
  logitude: number;

  @Column({ type: 'text' })
  about: string;

  @Column({ type: 'text' })
  instructions: string;

  @Column({ type: 'varchar', length: 100 })
  opening_hours: string;

  @Column({ type: 'boolean', default: false })
  open_on_weekends: Boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  created_at: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updated_at: Date;
}
