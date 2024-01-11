export default defineEventHandler((event) => {
  return {
    hello: new Date().toUTCString(),
  };
});
