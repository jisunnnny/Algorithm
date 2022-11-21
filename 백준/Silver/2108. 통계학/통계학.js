const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// input 첫번째 값은 수의 개수
let length = +input[0];
let numbers = [];

// input으로 들어온 숫자 배열 생성
for (let i = 1; i <= length; i++) {
  numbers.push(+input[i]);
}

// 오름차순 정렬
const sortNumbers = numbers.sort((a, b) => a - b);

solution(sortNumbers);

// 평균
function avg(sortNumbers) {
  const result = Math.round(
    sortNumbers.reduce((sum, curr) => sum + curr, 0) / sortNumbers.length
  );
  return parseInt(result);
}

// 중앙값
function mid(sortNumbers) {
  if (sortNumbers.length > 1) {
    return sortNumbers[Math.floor(sortNumbers.length / 2)];
  }

  return sortNumbers[0];
}

// 최빈값
function most(sortNumbers) {
  let count = sortNumbers.reduce((count, curr) => {
    if (count[curr] === undefined) {
      count[curr] = 0;
    }

    count[curr] += 1;
    return count;
  }, {});

  // value 값 내림차순
  let sortCount = [];
  for (let number in count) {
    sortCount.push([number, count[number]]);
  }
  sortCount.sort((a, b) => b[1] - a[1]);

  // 최빈값 변수에 저장
  maxCount = sortCount[0][1];
  let result = [];

  // 최빈값과 일치하는 키값 배열에 저장
  for (let i = 0; i < sortCount.length; i++) {
    if (maxCount === sortCount[i][1]) {
      result.push(Number(sortCount[i][0]));
    }
  }

  // 배열 오름차순
  const sortResult = result.sort((a, b) => a - b);

  // 최빈값이 2개 이상일 경우 두번째 값 출력
  if (sortResult.length > 1) return sortResult[1];

  // 최빈값이 1개일경우 해당값 출력
  return sortResult[0];
}

// 범위
function range(sortNumbers) {
  let min = sortNumbers[0];
  let max = sortNumbers[sortNumbers.length - 1];

  return max - min;
}

function solution(sortNumbers) {
  console.log(avg(sortNumbers));
  console.log(mid(sortNumbers));
  console.log(most(sortNumbers));
  console.log(range(sortNumbers));
}
