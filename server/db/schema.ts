import { index, integer, json, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

export const spacesTable = pgTable("spaces", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    password: varchar({ length: 255 }).notNull(),
});

export const attendeesTable = pgTable("attendees", {
    photoId: integer().primaryKey().generatedAlwaysAsIdentity(),
    photoURL: varchar().notNull(),
    createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
    spaceId: integer().notNull().references(() => spacesTable.id, { onDelete: "cascade" }),
},  (table) => [ index("attendee_spaceId_idx").on(table.spaceId) ]
);

export const facesTable = pgTable("faces", {
    faceId: integer().primaryKey().generatedAlwaysAsIdentity(),
    spaceId: integer().notNull().references(() => spacesTable.id, { onDelete: "cascade" }),
    photoId: integer().notNull().references(() => attendeesTable.photoId, { onDelete: "cascade" }),
    embeddings: json().$type<number[]>(),
    qualityScore: integer()
},  (table) => [ 
        index("facesTable_spaceId_idx").on(table.spaceId),
        index("facesTable_photoId_idx").on(table.photoId),
    ]
);