"use server";

import { db } from "@/lib/drizzle";
import { SpaceData } from "../schemas/space.schema";
import { spacesTable } from "@/server/db/schema";

export async function enterSpace(data: SpaceData){
    await db.insert(spacesTable).values(data).onConflictDoNothing();
}