const btnClick = document.getElementById("btn-click");
const numClicks = document.getElementById("num-clicks");
const btnSlow = document.getElementById("btn-slow");

let clicks = 0;
btnClick.onclick = () => {
  numClicks.innerHTML = `Number of clicks: ${++clicks}`;
};

const compute = (num) => {
  const limit = 7_000;
  for (let i = 0; i < limit; i++) {
    for (let j = 0; j < limit; j++) {
      num **= 2;
      num = Math.sqrt(num);
    }
  }

  return num;
};

// btnSlow.onclick = () => {
//   console.time();
//   console.log(compute(4));
//   console.timeEnd();
// }

btnSlow.onclick = () => {
  const nums = [1.5, 2.5, 3.5, 4.5];
  for (const n of nums) {
    // setTimeout(() => {
    //   console.log(compute(n));
    // }, 0);
    Promise.resolve().then(() => console.log(compute(n)));
  }
};
