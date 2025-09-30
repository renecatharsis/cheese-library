import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_cheese_type" AS ENUM('soft', 'hard', 'grated');
  CREATE TYPE "public"."enum_cheese_rating" AS ENUM('1', '2', '3', '4', '5');
  CREATE TABLE "cheese" (
  	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_cheese_type" NOT NULL,
  	"rating" "enum_cheese_rating",
  	"description" jsonb,
  	"first_purchase_date" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "cheese_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" uuid NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" uuid
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "cheese_id" uuid;
  ALTER TABLE "cheese_rels" ADD CONSTRAINT "cheese_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cheese"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cheese_rels" ADD CONSTRAINT "cheese_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "cheese_updated_at_idx" ON "cheese" USING btree ("updated_at");
  CREATE INDEX "cheese_created_at_idx" ON "cheese" USING btree ("created_at");
  CREATE INDEX "cheese_rels_order_idx" ON "cheese_rels" USING btree ("order");
  CREATE INDEX "cheese_rels_parent_idx" ON "cheese_rels" USING btree ("parent_id");
  CREATE INDEX "cheese_rels_path_idx" ON "cheese_rels" USING btree ("path");
  CREATE INDEX "cheese_rels_media_id_idx" ON "cheese_rels" USING btree ("media_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cheese_fk" FOREIGN KEY ("cheese_id") REFERENCES "public"."cheese"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_cheese_id_idx" ON "payload_locked_documents_rels" USING btree ("cheese_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "cheese" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "cheese_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "cheese" CASCADE;
  DROP TABLE "cheese_rels" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_cheese_fk";
  
  DROP INDEX "payload_locked_documents_rels_cheese_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "cheese_id";
  DROP TYPE "public"."enum_cheese_type";
  DROP TYPE "public"."enum_cheese_rating";`)
}
