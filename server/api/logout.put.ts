import { kv } from "@vercel/kv";

export default defineEventHandler(async (event) => {
  await kv.hset("user1", { loggedIn: false });
  const loggedIn = await kv.hget("user1", "loggedIn");
  return { loggedIn };
});
