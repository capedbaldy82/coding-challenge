function getDivisorWithLimitPower(n, limit, power) {
  let count = 1;
  let answer = 1;
  let i = 2;

  while (1) {
    if (answer > limit) return power;
    if (n % i === 0) {
      n /= i;
      count++;
    } else {
      if (n === 1) {
        answer *= count;
        if (answer > limit) return power;
        break;
      }
      i++;
      answer *= count;
      count = 1;
    }
  }

  return answer;
}

function solution(number, limit, power) {
  let answer = 0;
  let knights = [];

  // 공격력 입력
  for (let i = 1; i <= number; i++) {
    knights.push(getDivisorWithLimitPower(i, limit, power));
  }

  // 제한수치 초과자 공격력 변경
  //   for (let i = 0; i < number; i++) {
  //     if (knights[i] > limit) knights[i] = power;
  //   }

  // 총 필요한 철 계산
  answer = knights.reduce((acc, cur) => acc + cur, 0);

  return answer;
}

const data = [
  [5, 3, 2],
  [10, 3, 2],
];
data.forEach((arg) => {
  console.log(solution(...arg));
});
