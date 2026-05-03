"use server";

import { db } from "@/lib/drizzle";
import { SpaceData } from "../schemas/space.schema";
import { spacesTable } from "@/server/db/schema";
import bcrypt from 'bcryptjs';

export async function createSpace(data: SpaceData){
    const salt = await bcrypt.genSalt(10);
    const hashedpwd = await bcrypt.hash(data.password, salt);
    data.password  = hashedpwd;
    const done = await db.insert(spacesTable).values(data);
    console.log(done +" result");
}