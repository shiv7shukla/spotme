import z from "zod";

export const spaceSchema = z.object({
    space_name: z.string().trim().min(1, "Space name is required"),
    password: z.string().trim().min(5, "Password is too short")
});

export type SpaceData = z.infer<typeof spaceSchema>;