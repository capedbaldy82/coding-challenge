function GCD(num1, num2) {
  let i = 2;
  let result = 1;

  while (i <= num1 && i <= num2) {
    if ((num1 % i === 0) & (num2 % i === 0)) {
      num1 = num1 / i;
      num2 = num2 / i;
      result = result * i;
    } else {
      i++;
    }
  }

  return result;
}

function solution(denum1, num1, denum2, num2) {
  var answer = [];

  answer.push(denum1 * num2 + denum2 * num1);
  answer.push(num1 * num2);

  const gcd = GCD(answer[0], answer[1]);

  return [answer[0] / gcd, answer[1] / gcd];
}

const data = [
  [1, 2, 3, 4],
  [9, 2, 1, 3],
];
console.log(solution(...data[0]));
