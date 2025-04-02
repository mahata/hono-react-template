import { Hono } from 'hono';
import { cors } from 'hono/cors';
import books from './routes/books';

type Bindings = {
  ASSETS: { fetch: (req: Request | URL) => Promise<Response> }
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors({
  origin: 'http://localhost:5173',
}));

app.route('/api/v1/books', books);

app.get('*', async (c) => {
  const requestUrl = new URL(c.req.raw.url);
  const object = await c.env.ASSETS.fetch(new URL('/index.html', requestUrl.origin))

  if (!object.ok) {
    return c.text('404 Not Found', 404)
  }

  return new Response(object.body, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
})

export default app
