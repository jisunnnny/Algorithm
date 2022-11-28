const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const length = input[0];
  const resultArr = [];

  for (let i = 0; i < length; i++) {
    let brackets = input[i + 1]
      
    while (brackets.includes("()")) {
         brackets = brackets.replace(/\(\)/g, "");
    }
  

    if (brackets.length === 0) {
      resultArr.push("YES");
    } else {
      resultArr.push("NO");
    }
  }

  return resultArr;
}

console.log(solution(input).join("\n"));
