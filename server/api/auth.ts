import { kv } from '@vercel/kv';

export default defineEventHandler(async (event) => {
  const loggedIn = await kv.hget("user1", "loggedIn");
  return { loggedIn };
});
