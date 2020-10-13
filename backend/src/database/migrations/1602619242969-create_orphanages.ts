import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createOrphanages1602619242969
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({ name: 'orphanages', columns: [{ name: '', type: '' }] }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orphanages');
  }
}
