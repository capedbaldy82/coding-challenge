function solution(my_string, num1, num2) {
  my_string = my_string.split('');

  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];

  return my_string.join('');
}

const data = [
  ['hello', 1, 2],
  ['i love you', 3, 6],
];
console.log(solution(...data[0]));
