import { users } from "~/dbFake";

export default defineEventHandler((event) => {
  users[0].loggedIn = true;
  return { loggedIn: users[0].loggedIn };
});
