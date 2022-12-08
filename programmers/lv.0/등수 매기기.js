function solution(score) {
  let avarage = score.map((scores) => scores[0] + scores[1]);
  let rank = score
    .sort((a, b) => b[0] + b[1] - (a[0] + a[1]))
    .map((scores) => scores[0] + scores[1]);

  return avarage.map((sum) => rank.indexOf(sum) + 1);
}

const data = [
  [
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ],
  [
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ],
];
console.log(solution(data[1]));
