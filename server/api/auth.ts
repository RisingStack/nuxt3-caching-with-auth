import { users } from "~/dbFake";

export default defineEventHandler((event) => {
  const loggedIn = users[0].loggedIn;
  console.log("API", users[0], loggedIn);
  return { loggedIn };
});
