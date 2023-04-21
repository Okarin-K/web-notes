import { prisma } from "../lib/database/prisma";
import { UnValidateNote } from "../models/unvalidateNote"
import { ValidatedNote } from "../models/validatedNote"

const validateNote = (note: UnValidateNote): ValidatedNote => {
    const { title, content } = note;
    
    if(title.length > 50) {
        throw new Error("Title is too long");
    }

    if(content.length > 1000) {
        throw new Error("Content is too long");
    }

    return {
        title,
        content
    }
}

export const createNote = async (note: UnValidateNote): Promise<number> => {
    const validatedNote = validateNote(note);
    const created = await prisma.notes.create({
        data: validatedNote
    })

    return created.id;
}