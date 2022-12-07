function solution(quiz) {
  var answer = [];

  for (let exp of quiz) {
    let temp = exp.split(' ');
    while (temp.length > 3) {
      temp.unshift(+temp.shift() + (temp.shift() === '+' ? 1 : -1) * temp.shift());
    }

    if (temp[0] === +temp[2]) answer.push('O');
    else answer.push('X');
  }

  return answer;
}

const data = [
  ['3 - 4 = -3', '5 + 6 = 11'],
  ['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'],
];

console.log(solution(data[1]));
