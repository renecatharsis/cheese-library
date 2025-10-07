import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "cheese_purchases" (
  	"_order" integer NOT NULL,
  	"_parent_id" uuid NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date_of_purchase" timestamp(3) with time zone NOT NULL,
  	"price_by_kilo" numeric NOT NULL
  );
  
  ALTER TABLE "cheese_purchases" ADD CONSTRAINT "cheese_purchases_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cheese"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cheese_purchases_order_idx" ON "cheese_purchases" USING btree ("_order");
  CREATE INDEX "cheese_purchases_parent_id_idx" ON "cheese_purchases" USING btree ("_parent_id");
  ALTER TABLE "cheese" DROP COLUMN "first_purchase_date";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "cheese_purchases" CASCADE;
  ALTER TABLE "cheese" ADD COLUMN "first_purchase_date" timestamp(3) with time zone NOT NULL;`)
}
