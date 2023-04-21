import { Hono } from "hono";
import { cors } from "hono/cors";
import { UnValidateNote } from "./models/unvalidateNote";
import { createNote } from "./services/createNoteService";
import { deleteNote } from "./services/deleteNoteService";
import { findById, listAll } from "./services/queryNoteService";

export const api = new Hono();

api.use('*', cors())
api.get('/', (c) => c.text('Hello Hono!'));

api.get('/notes', async (c) => {
    const responseNote = await listAll();
    return c.json(responseNote);
})

api.get('/notes/:id', async (c) => {
    const id = c.req.param('id');
    const responseNote = await findById(id);
    return c.json(responseNote);
})

api.post('/notes', async (c) => {
    const unValidateNote = await c.req.json<UnValidateNote>();

    const id = await createNote(unValidateNote);
    return c.json(id);
});

api.delete('/notes/:id', async (c) => {
    const id = c.req.param('id');
    await deleteNote(id);
    return c.json(id);
});
