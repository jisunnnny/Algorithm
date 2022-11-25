const input = ["6", "(())())", "(((()())()", "(()())((()))", "((()()(()))(((())))()", "()()()()(()()())()", "(()((())()("];
// const input = ["3", "((", "))", "())(()"];

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const length = input[0];
  const brackets = input.slice(1);
  const resultArr = [];

  for (let i = 0; i < length; i++) {
    const stack = [];

    for (let j = 0; j < brackets[i].length; j++) {
      if (brackets[i][j] === "(") {
        stack.push(brackets[i][j]);
      } else {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
        } else {
          stack.push(")");
        }
      }
    }

    if (stack.length !== 0) {
      resultArr.push("NO");
    } else {
      resultArr.push("YES");
    }
  }

  return resultArr;
}

// console.log(solution(input))

console.log(solution(input).join("\n"));
