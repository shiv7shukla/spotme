import { integer, json, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const spacesTable = pgTable("spaces", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
    password: varchar().unique().notNull(),
});

export const attendeesTable = pgTable("attendees", {
    photoId: integer().primaryKey().generatedAlwaysAsIdentity(),
    photoURL: varchar().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    spaceId: integer().notNull().references(() => spacesTable.id, { onDelete: "cascade" }),
});

export const facesTable = pgTable("faces", {
    faceId: integer().primaryKey().generatedAlwaysAsIdentity(),
    spaceId: integer().notNull().references(() => spacesTable.id, { onDelete: "cascade" }),
    embeddings: json().$type<number[]>(),
    quality_score: integer()
});