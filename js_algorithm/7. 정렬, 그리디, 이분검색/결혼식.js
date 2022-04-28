function solution(times) {
  let answer = 0;
  let time = [];

  for (let x of times) {
    time.push([x[0], 's']);
    time.push([x[1], 'e']);
  }

  time.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt(0) - b[1].charCodeAt(0);
    } else return a[0] - b[0];
  });

  let count = 0;

  for (let x of time) {
    if (x[1] === 's') count++;
    else count--;
    answer = Math.max(answer, count);
  }

  // for (let i = 0; i < times.length; i++) {
  //   temp.push(times[i]);
  //   for (let j = 0; j < times.length; j++) {
  //     if (times[i][0] < times[j][0] && times[i][1] > times[j][0]) {
  //       temp.push(times[j]);
  //     }
  //   }
  //   if (answer < temp.length) answer = temp.length;
  //   temp = [];
  // }

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
