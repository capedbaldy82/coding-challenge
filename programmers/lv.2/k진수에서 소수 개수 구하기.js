function isPrimeNumber(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  var answer = 0;
  let convertedNumber = n.toString(k);
  let temp = '';

  for (let i = 0; i < convertedNumber.length; i++) {
    if (+convertedNumber[i]) {
      temp += convertedNumber[i];
    } else {
      if (isPrimeNumber(temp)) answer++;
      temp = '';
    }
  }

  if (isPrimeNumber(temp)) answer++;

  return answer;
}

const data = [
  [437674, 3],
  [110011, 10],
  [1, 6],
];
console.log(solution(...data[2]));
