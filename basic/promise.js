const f = () => new Promise((resolve, reject) => {
  const err = true;
  if (err) {
    setTimeout(() => reject('Error'), 0);
  } else {
    setTimeout(() => resolve('Value'), 0);
  }
});

const p = f();
p.then(v => console.log(v)).catch(e => console.log(e));
console.log(p);
