function solution(lines) {
  const line = {};

  lines.forEach((coordi) => {
    for (let i = coordi[0]; i < coordi[1]; i++) {
      line[i] = line[i] ? line[i] + 1 : 1;
    }
  });

  return Object.values(line).filter((count) => count > 1).length;
}

const data = [
  [
    [0, 1],
    [2, 5],
    [3, 9],
  ],
  [
    [-1, 1],
    [1, 3],
    [3, 9],
  ],
  [
    [0, 5],
    [3, 9],
    [1, 10],
  ],
];
console.log(solution(data[2]));
