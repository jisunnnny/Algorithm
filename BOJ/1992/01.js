// const input = +require("fs").readFileSync("/dev/stdin").toString();
const input = ["8", "11110000", "11110000", "00011100", "00011100", "11110000", "11110000", "11110011", "11110011"];
const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));
const results = [];

function solution(N, x, y) {
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      count += nums[x + i][y + j];
    }
  }

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
