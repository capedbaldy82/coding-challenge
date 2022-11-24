function solution(my_string) {
  const aeiou = ['a', 'e', 'i', 'o', 'u'];

  my_string = my_string.replace(/[aeiou]/gi, '');

  return my_string;
}

const data = ['bus', 'nice to meet you'];
console.log(solution(data[1]));
