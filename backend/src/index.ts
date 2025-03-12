import { Hono } from 'hono'
import { cors } from 'hono/cors';
import books from './routes/books';

const app = new Hono()

app.use('/api/*', cors({
  origin: 'http://localhost:5173',
}));

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1/books', books);

export default app
