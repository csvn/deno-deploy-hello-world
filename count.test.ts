import { assertEquals } from '@std/testing/asserts.ts';
import { count } from './count.ts';


Deno.test('count', () => {
  assertEquals(count(), 42);
});
