function solution(n) {
  var answer = 0;
  let prime = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (prime[i]) {
      for (let j = i + i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter((val) => !val).length - 2;
}

const data = [15];
console.log(solution(data[0]));
