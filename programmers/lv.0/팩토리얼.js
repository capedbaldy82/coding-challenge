function factorial(n) {
  if (n <= 2) return n;
  else return n * factorial(n - 1);
}

function solution(n) {
  var answer = 0;

  for (let i = 1; i <= n; i++) {
    if (factorial(i) <= n) answer++;
    else break;
  }

  return answer;
}

const data = [3628800, 1, 7];
console.log(solution(data[2]));
