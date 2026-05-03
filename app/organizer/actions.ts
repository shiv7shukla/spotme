"use server";

import { db } from "@/lib/drizzle";
import { SpaceData } from "../schemas/space.schema";
import { spacesTable } from "@/server/db/schema";
import bcrypt from 'bcryptjs';
import { getDbErrorMessage } from "@/lib/dbErrorUtil";

export async function createSpace(data: SpaceData){
    const salt = await bcrypt.genSalt(10);
    const hashedpwd = await bcrypt.hash(data.password, salt);
    data.password  = hashedpwd;
    try{
        await db.insert(spacesTable).values(data).onConflictDoNothing();
        return { success: true };
    }
    catch(error){
        const { message, constraint } = getDbErrorMessage(error);
        console.error('Database operation failed:', { message, constraint, originalError: error });
        return { message };
    }
}