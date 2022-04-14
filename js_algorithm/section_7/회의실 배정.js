function solution(meeting) {
  let answer = 0;

  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  let endTime = 0;
  for (let time of meeting) {
    if (time[0] >= endTime) {
      answer++;
      endTime = time[1];
    }
  }

  // for (let i = 0; i < meeting.length; i++) {
  //   let idx = meeting[i][1];
  //   let temp = 1;
  //   for (let j = i; j < meeting.length; j++) {
  //     if (idx <= meeting[j][0]) {
  //       temp++;
  //       idx = meeting[j][1];
  //     }
  //   }
  //   if (answer < temp) answer = temp;
  // }

  return answer;
}

let arr1 = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr1));
