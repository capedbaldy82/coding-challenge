const solution = (number) => {
  let answer = "2보다 큰 짝수를 입력해주세요.";
  let flag = false;
  let primeNum = [2];

  // number 보다 작은 소수 배열 만들기
  for (let i = 3; i < number; i++) {
    flag = false;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        flag = true;
      }
    }

    if (flag === false) {
      primeNum.push(i);
    }
  }

  // 소수배열을 통해 소수의 덧셈이 중복된 덧셈없이 number 의 값이 나올 때 까지 연산
  for (let i = 0; i < primeNum.length; i++) {
    for (let j = i; j < primeNum.length; j++) {
      if (primeNum[i] + primeNum[j] === number) {
        answer = `${number} == ${primeNum[i]} + ${primeNum[j]}`;
      }
    }
  }

  return answer;
};

console.log(solution(100));
console.log(solution(56));
