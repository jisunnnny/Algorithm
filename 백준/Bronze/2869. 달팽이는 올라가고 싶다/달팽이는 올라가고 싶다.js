const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

function solution(input) {
  const A = input[0]; // 이동
  const B = input[1]; // 미끄러짐
  const V = input[2]; // 높이(최종 목적지)

  const result = Math.ceil((V - B) / (A - B));

  return result;
}

console.log(solution(input));