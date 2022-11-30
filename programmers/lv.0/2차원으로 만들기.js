function solution(num_list, n) {
  var answer = [];
  let temp = [];

  //   for (let i = 0; i < len; i++) {
  //     temp.push(num_list.shift());
  //     if (temp.length === 2) {
  //       answer.push(temp);
  //       temp = [];
  //     }
  //   }

  while (num_list.length) {
    temp.push(num_list.shift());
    if (temp.length === 2) {
      answer.push(temp);
      temp = [];
    }
  }

  return answer;
}

const data = [
  [[1, 2, 3, 4, 5, 6, 7, 8], 2],
  [[100, 95, 2, 4, 5, 6, 18, 33, 948], 3],
];
console.log(solution(...data[0]));
