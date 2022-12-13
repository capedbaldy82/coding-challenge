function solution(k, m, score) {
  const boxes = [];
  let box = [];

  score
    .sort((a, b) => b - a)
    .forEach((apple) => {
      box.push(apple);
      if (box.length === m) {
        boxes.push(box);
        box = [];
      }
    });

  return boxes.reduce((acc, cur) => {
    return acc + Math.min(...cur) * cur.length;
  }, 0);
}

const data = [
  [3, 4, [1, 2, 3, 1, 2, 3, 1]],
  [4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]],
];
console.log(solution(...data[1]));
