function solution(numbers, k) {
  var answer = 1;

  for (let i = 1; i < k; i++) {
    answer += 2;
    if (answer > numbers.length) {
      answer -= numbers.length;
    }
  }

  return answer;
}

const data = [
  [[1, 2, 3, 4], 2],
  [[1, 2, 3, 4, 5, 6], 5],
  [[1, 2, 3], 3],
];

console.log(solution(...data[0]));
