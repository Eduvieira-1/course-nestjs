import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCoursesTable1707386984349 implements MigrationInterface {

    //aplicar a migração no banco de dados
    //typeorm migration:run
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(new Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },{
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP'
                }
            ]
        })
        )
    }

    //desfazer
    //typeorm migration:revert
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('courses')
    }

}
