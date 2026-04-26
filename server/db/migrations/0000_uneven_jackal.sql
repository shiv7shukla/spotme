CREATE TABLE "attendees" (
	"photoId" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "attendees_photoId_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"photoURL" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"spaceId" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faces" (
	"faceId" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "faces_faceId_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"spaceId" integer NOT NULL,
	"embeddings" json,
	"quality_score" integer
);
--> statement-breakpoint
CREATE TABLE "spaces" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "spaces_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" varchar NOT NULL,
	"password" varchar NOT NULL,
	CONSTRAINT "spaces_password_unique" UNIQUE("password")
);
--> statement-breakpoint
ALTER TABLE "attendees" ADD CONSTRAINT "attendees_spaceId_spaces_id_fk" FOREIGN KEY ("spaceId") REFERENCES "public"."spaces"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faces" ADD CONSTRAINT "faces_spaceId_spaces_id_fk" FOREIGN KEY ("spaceId") REFERENCES "public"."spaces"("id") ON DELETE cascade ON UPDATE no action;