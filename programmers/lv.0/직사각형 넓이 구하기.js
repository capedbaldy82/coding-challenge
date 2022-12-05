function solution(dots) {
  var answer = 0;

  dots.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return dots;
}

const data = [
  [
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ],
  [
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ],
];

console.log(solution(data[1]));
