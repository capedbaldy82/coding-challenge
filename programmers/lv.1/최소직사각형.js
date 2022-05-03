function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
    }
  }

  for (let j = 0; j < sizes.length; j++) {
    if (width < sizes[j][0]) width = sizes[j][0];
    if (height < sizes[j][1]) height = sizes[j][1];
  }

  return width * height;
}

const data = [
  {
    sizes: [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
  },
  {
    sizes: [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ],
  },
  {
    sizes: [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11],
    ],
  },
];

console.log(solution(data[2].sizes));
