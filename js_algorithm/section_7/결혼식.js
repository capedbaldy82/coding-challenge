function solution(times) {
  let answer = 0;
  let temp = [];

  for (let i = 0; i < times.length; i++) {
    temp.push(times[i]);
    for (let j = 0; j < times.length; j++) {
      if (times[i][0] < times[j][0] && times[i][1] > times[j][0]) {
        temp.push(times[j]);
      }
    }
    if (answer < temp.length) answer = temp.length;
    temp = [];
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
