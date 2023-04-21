import { prisma } from "../lib/database/prisma"

export const deleteNote = async (id: string): Promise<void> => {
    const parsed = Number(id);
    if(isNaN(parsed)) {
        throw new Error("Invalid id")
    };

    await prisma.notes.delete({
        where: {
            id: parsed
        }
    })
}