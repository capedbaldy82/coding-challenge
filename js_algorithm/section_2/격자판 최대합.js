function solution(arr) {
  let answer = 0;
  let row;
  let column;

  // 행열대각
  for (let i = 0; i < arr.length; i++) {
    row = 0;
    column = 0;
    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    answer = Math.max(answer, row, column);
  }

  row = 0;
  column = 0;
  for (let i = 0; i < arr.length; i++) {
    row += arr[i][i];
    column += arr[4 - i][i];
  }

  answer = Math.max(answer, row, column);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
