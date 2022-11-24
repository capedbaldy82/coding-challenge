function solution(n) {
  return (n + '').split('').reduce((a, b) => a + parseInt(b), 0);
}

const data = [1234, 930211];

console.log(solution(data[1]));
