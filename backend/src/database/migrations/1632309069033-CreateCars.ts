import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCars1632309069033 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'model',
            type: 'varchar'
          },
          {
            name: 'color',
            type: 'varchar'
          },
          {
            name: 'avatar',
            type: 'varchar'
          },
          {
            name: 'daily_amount',
            type: 'numeric'
          },
          {
            name: 'license_plate',
            type: 'varchar'
          },
          {
            name: 'year',
            type: 'varchar'
          },
          {
            name: 'available',
            type: 'boolean',
            default: true
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
            name: 'FKUserIdCars',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars')
  }
}
