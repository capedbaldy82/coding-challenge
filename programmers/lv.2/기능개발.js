function solution(progresses, speeds) {
  var answer = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] = progresses[i] + speeds[i];
    }

    console.log(progresses);

    if (progresses[0] >= 100) {
      let count = 0;
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100) count++;
        else break;
      }
      for (let i = 0; i < count; i++) {
        progresses.shift();
        speeds.shift();
      }
      answer.push(count);
    }
  }
  return answer;
}

const data = [
  { progresses: [93, 30, 55], speeds: [1, 30, 5] },
  { progresses: [95, 90, 99, 99, 80, 99], speeds: [1, 1, 1, 1, 1, 1] },
];

console.log(solution(data[0].progresses, data[0].speeds));

// progresses[0]이 100이상되는 날 => 7일
// progresses[0] 포함 그 이후 인덱스 중 100이상인 것 포함해서 갯수 push
// 푸쉬한 갯수만큼 쉬프트
// 다시 반복
