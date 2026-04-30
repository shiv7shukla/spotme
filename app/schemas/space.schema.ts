import z from "zod";

export const spaceSchema = z.object({
    spaceName: z.string().trim().min(1, "Space Name is required"),
    password: z.string().trim().min(5, "Password is too short")
});

export type SpaceData = z.infer<typeof spaceSchema>;