function solution(my_string, n) {
  var answer = [...my_string].map((letter) => letter.repeat(n)).join('');
  return answer;
}

const data = [['hello', 3]];
console.log(solution(...data[0]));
