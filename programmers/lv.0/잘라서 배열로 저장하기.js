function solution(my_str, n) {
  var answer = [];

  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(my_str.substr(i * n, 6));
  }

  return answer;
}

const data = [
  ['abc1Addfggg4556b', 6],
  ['abcdef123', 3],
];

console.log(solution(...data[0]));
