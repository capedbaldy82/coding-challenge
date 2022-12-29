function solution(n, left, right) {
  let arr = Array.from({ length: n });
  let index = 0;

  let start_row = Math.floor(left / n);
  let start_col = left % n;
  let end_row = Math.floor(right / n);

  for (let i = start_row; i <= end_row; i++) {
    for (let j = 0; j < n; j++) {
      arr[index] = Math.max(i, j) + 1;
      index++;
    }
  }

  return arr.splice(start_col, right - left + 1);
}

const data = [
  [3, 2, 5],
  [4, 7, 14],
];
console.log(solution(...data[1]));
