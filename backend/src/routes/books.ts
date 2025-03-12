import { Hono } from 'hono';

const books = new Hono();

books.get('/', (c) => {
  return c.json([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  ]);
});

export default books;
