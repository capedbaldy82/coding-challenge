function solution(s) {
  let stack = [];

  s = s.split(' ');

  for (let value of s) {
    if (value === 'Z') stack.pop();
    else stack.push(parseInt(value));
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}

const data = ['1 2 Z 3', '10 20 30 40', '10 Z 20 Z 1', '10 Z 20 Z', '-1 -2 -3 Z'];

for (let i = 0; i < data.length; i++) {
  console.log(solution(data[i]));
}
