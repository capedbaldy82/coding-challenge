const solution = (testCase, mapSize, detectSize, map) => {
  let mineNum = [];
  let detectedMap = [];

  for (let g = 0; g < mapSize - detectSize + 1; g++) {
    for (let h = 0; h < mapSize - detectSize + 1; h++) {
      let row = [];
      for (let i = 0 + h; i < detectSize + h; i++) {
        for (let j = 0 + g; j < detectSize + g; j++) {
          row.push(map[i][j]);
        }
      }
      detectedMap.push(row);
    }
  }

  detectedMap.forEach((row) => {
    let count = 0;
    for (let i = 0; i < row.length; i++) {
      if (row[i] > 0) {
        count += 1;
      }
    }
    mineNum.push(count);
  });
  return Math.max(...mineNum);
};

let testCase = 1;
let mapSize = 5;
let detectSize = 3;
let map = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];

console.log(solution(testCase, mapSize, detectSize, map));
