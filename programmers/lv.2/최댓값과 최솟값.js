function solution(s) {
  return [Math.min(...s.split(' ')), Math.max(...s.split(' '))].join(' ');
}

const data = ['1 2 3 4', '-1 -2 -3 -4', '-1 -1'];
console.log(solution(data[0]));
