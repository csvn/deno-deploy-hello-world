import { serve } from '@std/http/server.ts';


console.log('Listening on http://localhost:8000');
serve(async function (_req: Request) {
  return new Response('Hello World!', {
    headers: { 'content-type': 'text/plain; charset=utf8' },
  });
});
