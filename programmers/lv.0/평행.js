function solution(dots) {
  let inclination1 = 0;
  let inclination2 = 0;

  for (let i = 0; i < 2; i++) {
    inclination1 = (dots[0][1] - dots[i + 1][1]) / (dots[0][0] - dots[i + 1][0]);
    inclination2 = (dots[2 - i][1] - dots[3][1]) / (dots[2 - i][0] - dots[3][0]);

    if (inclination1 === inclination2) return 1;
  }

  inclination1 = (dots[0][1] - dots[i + 1][1]) / (dots[0][0] - dots[i + 1][0]);
  inclination2 = (dots[1][1] - dots[2][1]) / (dots[1][0] - dots[2][0]);

  if (inclination1 === inclination2) return 1;

  return 0;
}

const data = [
  [
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ],
  [
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ],
];
console.log(solution(data[0]));
