function solution(food) {
  var answer = '';

  food.forEach((many, index) => {
    answer += (index + '').repeat(Math.floor(many / 2));
  });

  return answer + '0' + answer.split('').reverse().join('');
}

const data = [
  [1, 3, 4, 6],
  [1, 7, 1, 2],
];
console.log(solution(data[1]));
