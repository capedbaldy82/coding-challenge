function solution(n) {
  let answer = -1;
  let five = parseInt(n / 5, 10);
  let three = parseInt(n / 3, 10);
  let total = 0;
  let flag = true;

  for (let i = five; i >= 0; i--) {
    for (let j = 0; j <= three; j++) {
      total = 5 * i + 3 * j;
      if (total === n) {
        answer = i + j;
        flag = false;
        break;
      } else if (total > n) {
        break;
      }
    }
    if (!flag) {
      break;
    }
  }

  return answer;
}

console.log(solution(21));
