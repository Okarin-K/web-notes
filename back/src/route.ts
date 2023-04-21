import { Hono } from "hono";
import { cors } from "hono/cors";
import { UnValidateNote } from "./models/unvalidateNote";
import { createNote } from "./services/createNoteService";
import { listAll } from "./services/queryNoteService";

export const api = new Hono();

api.use('*', cors())
api.get('/', (c) => c.text('Hello Hono!'));

api.get('/notes', async (c) => {
    const responseNote = await listAll();
    return c.json(responseNote);
})

api.post('/notes', async (c) => {
    const unValidateNote = await c.req.json<UnValidateNote>();

    const ok = await createNote(unValidateNote);
    return c.json({ok});
});