console.log("Hello");

setTimeout(() => {
  console.log("Time");
}, 2000);

Promise.resolve("Promise").then((v) => {
  console.log(v);
});

console.log("World");
