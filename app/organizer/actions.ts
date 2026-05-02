"use server";

import { db } from "@/lib/drizzle";
import { SpaceData } from "../schemas/space.schema";
import { spacesTable } from "@/server/db/schema";

export async function createSpace(data: SpaceData){
    await db.insert(spacesTable).values(data);
}