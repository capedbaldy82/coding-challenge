function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}

const data = [
  [
    [1, 4, 2],
    [5, 4, 4],
  ],
  [
    [1, 2],
    [3, 4],
  ],
  [
    [1, 2, 5, 6],
    [3, 4, 8, 7],
  ],
  [
    [1, 99, 88, 95],
    [100, 3, 4, 7],
  ],
];
console.log(solution(...data[3]));
