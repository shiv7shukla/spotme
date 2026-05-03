ALTER TABLE "faces" RENAME COLUMN "quality_score" TO "qualityScore";--> statement-breakpoint
ALTER TABLE "spaces" RENAME COLUMN "name" TO "spaceName";--> statement-breakpoint
ALTER TABLE "spaces" DROP CONSTRAINT "spaces_password_unique";--> statement-breakpoint
ALTER TABLE "attendees" ALTER COLUMN "createdAt" SET DATA TYPE timestamp with time zone;--> statement-breakpoint
ALTER TABLE "attendees" ALTER COLUMN "createdAt" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "spaces" ALTER COLUMN "password" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "faces" ADD COLUMN "photoId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "faces" ADD CONSTRAINT "faces_photoId_attendees_photoId_fk" FOREIGN KEY ("photoId") REFERENCES "public"."attendees"("photoId") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "attendee_spaceId_idx" ON "attendees" USING btree ("spaceId");--> statement-breakpoint
CREATE INDEX "facesTable_spaceId_idx" ON "faces" USING btree ("spaceId");--> statement-breakpoint
CREATE INDEX "facesTable_photoId_idx" ON "faces" USING btree ("photoId");