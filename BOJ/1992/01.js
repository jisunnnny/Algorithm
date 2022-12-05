// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const input = ["8", "00000000", "00000000", "00001111", "00001111", "00011111", "00111111", "00111111", "00111111"];
// const input = ["8", "11110000", "11110000", "00011100", "00011100", "11110000", "11110000", "11110011", "11110011"];

const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));

const results = [];

function solution(N, x, y) {
  let count = 0;

  console.log(N, x, y);

  for (let i = 0; i < N; i++) {
    console.log("startLine", i);
    for (let j = 0; j < N; j++) {
      console.log(nums[y + j][x + i]);
      count += nums[y + j][x + i];
    }
  }

  console.log("count", count);

  if (count === 0) {
    results.push(0);
  } else if (count === N * N) {
    results.push(1);
  } else {
    N /= 2;
    results.push("(");
    solution(N, x, y);
    solution(N, x + N, y);
    solution(N, x, y + N);
    solution(N, x + N, y + N);
    results.push(")");
  }
}

solution(N, 0, 0);
console.log(results.join(""));
