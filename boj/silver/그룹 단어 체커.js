function solution(a, str) {
  let answer = 0;
  let stack = [];
  let flag = true;

  for (let x of str) {
    for (let i = 0; i < x.length; i++) {
      stack.push(x[i]);
      if (stack.indexOf(x[i]) < i) {
        if (stack[i] !== stack[i - 1]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) {
      answer++;
    } else {
      flag = true;
    }
    stack = [];
  }

  return answer;
}

const a = 5;
const b = ["aaac", "aaaca", "ab", "aa", "aca", "ba", "bb"];

console.log(solution(a, b));
