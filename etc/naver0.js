// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 1;
  let flag = true;
  let tempArr;
  A.sort((a, b) => a - b);
  tempArr = A.filter((ele) => ele > 0);

  while (tempArr.includes(answer)) {
    answer += 1;
  }

  return answer;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
