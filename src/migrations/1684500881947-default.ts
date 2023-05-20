import { MigrationInterface, QueryRunner } from "typeorm";

export class default1684500881947 implements MigrationInterface {
    name = 'default1684500881947'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "new_promotion" ("id" SERIAL NOT NULL, "promotion_image" character varying NOT NULL, "city" character varying NOT NULL, "establishment" character varying NOT NULL, "product" character varying NOT NULL, "price" character varying NOT NULL, CONSTRAINT "PK_0b3a897895333eb2a92d595f68a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "new_promotion"`);
    }

}
