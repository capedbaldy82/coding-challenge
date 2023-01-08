function solution(n) {
  let stack = [];
  let i = 0;

  while (stack.length !== n) {
    if (i % 3 !== 0 && !(i + '').includes('3')) {
      stack.push(i);
    }
    i++;
  }

  return stack.pop();
}

const data = [10, 15, 40];
console.log(solution(data[1]));
