import { z } from "zod";

export const zNote = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
});

export const zNotes = z.array(zNote);
export const zUpsertNote = z.object({ 
    title: z.string(),
    content: z.string(),
});

export type Note = z.infer<typeof zNote>;
export type Notes = z.infer<typeof zNotes>;
