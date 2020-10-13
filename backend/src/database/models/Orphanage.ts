import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import Image from './Image';

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'decimal', scale: 10, precision: 2 })
  latitude: number;

  @Column({ type: 'decimal', scale: 10, precision: 2 })
  longitude: number;

  @Column({ type: 'text' })
  about: string;

  @Column({ type: 'text' })
  instructions: string;

  @Column({ type: 'varchar', length: 100 })
  opening_hours: string;

  @Column({ type: 'boolean', default: false })
  open_on_weekends: Boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[];

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @CreateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
