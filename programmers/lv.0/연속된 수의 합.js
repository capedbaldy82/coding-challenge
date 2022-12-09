function solution(num, total) {
  let sum = 0;
  let count = 0;

  while (1) {
    for (let i = 1 + count; i <= num + count; i++) {
      sum += i;
    }
    if (sum === total) break;
    if (sum < total) {
      count++;
      sum = 0;
    }
    if (sum > total) {
      count--;
      sum = 0;
    }
  }

  return Array.from({ length: num }, (_, i) => 1 + count + i);
}

const data = [
  [3, 12],
  [5, 15],
  [4, 14],
  [5, 5],
];
console.log(solution(...data[2]));
