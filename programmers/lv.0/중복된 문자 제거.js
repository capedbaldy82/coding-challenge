function solution(my_string) {
  const arr = new Set(my_string.split(''));

  return [...arr].join('');
}

const data = ['people', 'We are the world'];
console.log(solution(data[1]));
