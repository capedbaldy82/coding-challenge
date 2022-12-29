function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr2[0].length; j++) {
      let total = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        total += arr1[i][k] * arr2[k][j];
      }
      temp.push(total);
    }
    answer.push(temp);
  }

  return answer;
}

const data = [
  [
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ],
  [
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ],
  ],
  [
    [
      [2, 3, 2, 4],
      [4, 2, 4, 2],
      [3, 1, 4, 1],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
      [4, 2, 1],
    ],
  ],
  [
    [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 0],
    ],
    [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 0],
    ],
  ],
];
console.log(solution(...data[3]));
