// const input = ["6", "(())())", "(((()())()", "(()())((()))", "((()()(()))(((())))()", "()()()()(()()())()", "(()((())()("];
const input = ["3", "((", "))", "())(()"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const length = input[0];
  const brackets = input.slice(1);
  const resultArr = [];

  for (let i = 0; i < length; i++) {
    let count = 0;

    for (let j = 0; j < brackets[i].length; j++) {
      if (brackets[i][j] === "(") {
        count++;
      } else {
        count--;
      }
    }

    if (count === 0) {
      resultArr.push("YES");
    } else {
      resultArr.push("NO");
    }
  }

  return resultArr.join("\n");
}

// console.log(solution(input))

console.log(solution(input));

// 실패
// "("와 ")"의 갯수가 같으면 괄호를 열고 닫을 수 있다고 생각함
// but 갯수는 같은데 만약 괄호가 )( 이런식이라면?
