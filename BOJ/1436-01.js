// const N = +require("fs").readFileSync("/dev/stdin").toString();
const N = 500;

let num = 666;
let count = 1;

while (count !== N) {
  num++;
  if (String(num).includes("666")) count++;
}

console.log(num);
