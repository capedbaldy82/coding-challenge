function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2);
}

const data = [
  [[1, 2, 3, 4, 5], 1, 3],
  [[1, 3, 5], 1, 2],
];
console.log(solution(...data[1]));
