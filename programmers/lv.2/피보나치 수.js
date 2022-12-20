function solution(n) {
  let fiboNumbers = Array.from({ length: n }, () => 0);
  fiboNumbers[0] = 0;
  fiboNumbers[1] = 1;

  for (let i = 2; i <= n; i++) {
    fiboNumbers[i] = fiboNumbers[i - 1] + fiboNumbers[i - 2];
  }

  return fiboNumbers[n];
}

const data = [3, 10];
console.log(solution(data[1]));
