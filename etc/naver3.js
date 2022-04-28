// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let answer = 0;
  // let reversedArr = A.map((col, i) => {
  //   return A.map((row) => row[i]);
  // });

  // if (A[0][0] === Math.min(A[0]) && A[0][0] === Math.max(reversedArr[0])) {
  //   answer += 1;
  // }
  // if (A[0][1] === Math.max(A[0]) && A[0][0] === Math.min(reversedArr[0])) {
  //   answer += 1;
  // }
  // if (!(A[1][0] === Math.min(A[0]) && A[0][0] === Math.min(reversedArr[0]))) {
  //   answer += 1;
  // }
  // if (!(A[1][1] === Math.max(A[0]) && A[0][0] === Math.max(reversedArr[0]))) {
  //   answer += 1;
  // }

  for (let i = 1; i < A.length - 1; i++) {
    for (let j = 1; j < A.length - 1; j++) {
      if (
        (A[i][j - 1] > A[i][j] &&
          A[i][j] < A[i][j + 1] &&
          A[i - 1][j] < A[i][j] &&
          A[i][j] > A[i + 1][j]) ||
        (A[i][j - 1] < A[i][j] &&
          A[i][j] > A[i][j + 1] &&
          A[i - 1][j] > A[i][j] &&
          A[i][j] < A[i + 1][j])
      ) {
        console.log(A[i][j]);
        answer += 1;
      }
    }
  }

  console.log(answer);

  return answer;
}

solution([
  [0, 1, 9, 3],
  [7, 5, 8, 3],
  [9, 2, 9, 4],
  [4, 6, 7, 1],
]);
