function solution(n) {
  var answer = 0;
  let s = '';

  while (n !== 0) {
    s = (n % 3) + s;
    n = parseInt(n / 3, 10);
  }

  console.log(s);

  s = s.split('').reverse().join('');

  console.log(s);

  for (let i = 0; i < s.length; i++) {
    answer += parseInt(s[s.length - 1 - i], 10) * 3 ** i;
  }

  return answer;
}

console.log(solution(45));
