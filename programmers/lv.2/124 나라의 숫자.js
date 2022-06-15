function solution(n) {
  var answer = '';
  let arr = [4, 1, 2];

  while (n) {
    answer = arr[n % 3] + answer;
    n = n % 3 ? Math.floor(n / 3) : n / 3 - 1;
  }

  return answer;
}

console.log(solution(15));
