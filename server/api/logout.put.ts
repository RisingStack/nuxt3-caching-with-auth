import { users } from "~/dbFake";

export default defineEventHandler((event) => {
  users[0].loggedIn = false;
  return { loggedIn: users[0].loggedIn };
});
