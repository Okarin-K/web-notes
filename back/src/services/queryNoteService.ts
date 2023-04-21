import { PrismaClient } from '@prisma/client';
import { ReadNoteFromDB } from '../models/readNoteFromDB';
import { ResponseNote } from '../models/responseNote';
import { formatDate } from './formatDate';

const convertToNote = (note: ReadNoteFromDB): ResponseNote => {
    return {
        id: note.id,
        title: note.title,
        content: note.content,
        createdAt: formatDate(note.createdAt),
        updatedAt: formatDate(note.updatedAt)
    }
}

export const listAll = async () => {
    const prisma = new PrismaClient();
    const notes = await prisma.notes.findMany();
    return notes.map(convertToNote);
}