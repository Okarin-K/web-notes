import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { UnValidateNote } from './models/unvalidateNote';
import { createNote } from './services/noteService';

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))

app.post('/notes', async (c) => {
    const unValidateNote = await c.req.json<UnValidateNote>();

    const ok = await createNote(unValidateNote);
    return c.json({ok});
});

app.onError((err, c) => {
    console.error(err);
    return c.text("Error: " + err.message, 500);
});

serve({
    fetch: app.fetch,
    port: 8787
})
