import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { api } from './route';

const app = new Hono();

app.route('/api', api);

app.onError((err, c) => {
    console.error(err);
    return c.text("Error: " + err.message, 500);
});

serve({
    fetch: app.fetch,
    port: 8787
});
