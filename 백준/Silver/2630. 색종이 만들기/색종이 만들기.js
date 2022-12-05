const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, ...paper] = input;
paper = paper.map((el) => el.split(" ").map(Number));

let results = [];
let white = 0;
let blue = 0;

function solution(N, x, y) {
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      count += paper[y + j][x + i];
    }
  }

  if (count === 0) {
    white++;
  } else if (count === N * N) {
    blue++;
  } else {
    N /= 2;
    solution(N, x, y);
    solution(N, x + N, y);
    solution(N, x, y + N);
    solution(N, x + N, y + N);
  }
}

solution(N, 0, 0);

results.push(white);
results.push(blue);

console.log(results.join("\n"));
