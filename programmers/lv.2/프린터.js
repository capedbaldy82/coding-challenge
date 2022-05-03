function solution(priorities, location) {
  var answer = 0;
  let flag = true;

  while (flag) {
    if (priorities[0] === Math.max(...priorities)) {
      if (location === 0) {
        flag = false;
      }
      priorities.shift();
      answer++;
      location--;
      if (location < 0) {
        location += priorities.length;
      }
    } else {
      priorities.push(priorities.shift());
      location--;
      if (location < 0) {
        location += priorities.length;
      }
    }
  }

  return answer;
}

const data = [
  {
    priorities: [2, 1, 3, 2],
    location: 2,
  },
  {
    priorities: [1, 1, 9, 1, 1, 1],
    location: 0,
  },
  {
    priorities: [2, 1, 2, 1, 2, 1, 2, 1, 2],
    location: 1,
  },
];

console.log(solution(data[2].priorities, data[2].location));
