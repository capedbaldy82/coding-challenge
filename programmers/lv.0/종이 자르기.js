function solution(M, N) {
  return M * N - 1;
}

const data = [
  [2, 2],
  [2, 5],
  [1, 1],
  [4, 3],
];

for (let i = 0; i < data.length; i++) {
  console.log(solution(...data[i]));
}
