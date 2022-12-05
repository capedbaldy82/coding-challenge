const step = {
  up: [0, 1],
  down: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

function solution(keyinput, [n, m]) {
  const [x1, x2] = [-(n - 1) / 2, (n - 1) / 2];
  const [y1, y2] = [-(m - 1) / 2, (m - 1) / 2];

  return keyinput.reduce(
    ([x, y], key) => {
      const [nx, ny] = [x + step[key][0], y + step[key][1]];

      if (nx >= x1 && nx <= x2 && ny >= y1 && ny <= y2) return [nx, ny];
      else return [x, y];
    },
    [0, 0]
  );
}

const data = [
  [
    ['left', 'left', 'left', 'right'],
    [3, 3],
  ],
  [
    ['left', 'right', 'up', 'right', 'right'],
    [11, 11],
  ],
  [
    ['down', 'down', 'down', 'down', 'down'],
    [7, 9],
  ],
];

console.log(solution(...data[1]));
