import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateRents1632346280466 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rents',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'client_id',
            type: 'uuid'
          },
          {
            name: 'amount',
            type: 'numeric'
          },
          {
            name: 'start_date',
            type: 'timestamp'
          },
          {
            name: 'finish_date',
            type: 'timestamp'
          },
          {
            name: 'car_id',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKCarRent',
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            columnNames: ['car_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          },
          {
            name: 'FKClientRent',
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            columnNames: ['client_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rents')
  }
}
