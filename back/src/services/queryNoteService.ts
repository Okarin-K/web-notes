import { prisma } from '../lib/database/prisma';
import { ReadNoteFromDB } from '../models/readNoteFromDB';
import { ResponseNote } from '../models/responseNote';
import { formatDate } from './formatDate';

const convertToNote = (note: ReadNoteFromDB): ResponseNote => {
    return {
        id: note.id.toString(),
        title: note.title,
        content: note.content,
        createdAt: formatDate(note.createdAt),
        updatedAt: formatDate(note.updatedAt)
    }
}

export const listAll = async () => {
    const notes = await prisma.notes.findMany();
    return notes.map(convertToNote);
}

export const findById = async (id: string) => {
    const note = await prisma.notes.findUnique({
        where: {
            id: parseInt(id)
        }
    });

    if(!note) {
        throw new Error('Note not found')
    };

    return convertToNote(note);
}