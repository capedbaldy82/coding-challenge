function getGCD(num1, num2) {
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

function getPrimes(num) {
  let result = [];
  let i = 2;
  while (i <= num) {
    if (num % i === 0) {
      num = num / i;
      result.push(i);
    } else {
      i++;
    }
  }

  return result;
}

function solution(a, b) {
  let answer = 0;
  const gcd = getGCD(a, b);
  const primes = getPrimes(b / gcd);

  for (let i = 0; i < primes.length; i++) {
    if (primes[i] === 2 || primes[i] === 5) answer++;
  }

  return primes.length === answer ? 1 : 2;
}

console.log(solution(11, 22));
