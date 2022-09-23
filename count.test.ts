import { assertEquals } from '@std/testing/asserts.ts';
import { count } from './count.ts';


Deno.test('url test', () => {
  assertEquals(count(), 42);
});
