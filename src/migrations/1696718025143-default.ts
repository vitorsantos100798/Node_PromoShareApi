import { MigrationInterface, QueryRunner } from "typeorm";

export class default1696718025143 implements MigrationInterface {
    name = 'default1696718025143'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "new_promotion" ("id" SERIAL NOT NULL, "promotion_image" character varying NOT NULL, "city" character varying NOT NULL, "establishment" character varying NOT NULL, "product" character varying NOT NULL, "price" character varying NOT NULL, CONSTRAINT "PK_0b3a897895333eb2a92d595f68a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "city" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reflesh_token" ("id" SERIAL NOT NULL, "refresh_token" character varying NOT NULL, "user_id" character varying NOT NULL, "expires_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_aa8a9eea7159698eaae71c54480" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reflesh_token" ADD CONSTRAINT "FK_172c4755bae5ce821dba970747b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reflesh_token" DROP CONSTRAINT "FK_172c4755bae5ce821dba970747b"`);
        await queryRunner.query(`DROP TABLE "reflesh_token"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "new_promotion"`);
    }

}
