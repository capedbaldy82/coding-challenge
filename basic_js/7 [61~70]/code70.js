const solution = (data, data2) => {
  let answer = [];
  // let answer = Array[Array(data[0].length).fill(0, 0, data.length)];

  if (data[0].length !== data2.length) {
    return -1;
  }

  for (let i = 0; i < data2[0].length; i++) {
    let row = [];
    for (let j = 0; j < data2[0].length; j++) {
      temp = 0;
      for (let k = 0; k < data[0].length; k++) {
        temp += data[i][k] * data2[k][j];
      }
      row.push(temp);
      console.log(temp);
    }
    answer.push(row);
  }

  return answer;
};

let data = [
  [1, 2],
  [2, 4],
];
let data2 = [
  [1, 0],
  [0, 3],
];
console.log(solution(data, data2));
