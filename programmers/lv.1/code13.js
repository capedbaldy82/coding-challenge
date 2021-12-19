function solution(n, lost, reserve) {
  var answer = 0;
  let student = new Array(n).fill(1);

  // 체육복 없는 친구들 보유 체육복 제거
  for (let i = 0; i < lost.length; i++) {
    student[lost[i] - 1]--;
  }

  // 체육복 여벌 있는 친구들 보유 체육복 추가
  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i] - 1]++;
  }

  for (let i = 0; i < student.length; i++) {
    if (student[i] === 0) {
      if (i === 0 && student[i + 1] === 2) {
        student[i]++;
        student[i + 1]--;
      } else if (i === student.length - 1 && student[i - 1] === 2) {
        student[i]++;
        student[i - 1]--;
      } else if (student[i + 1] === 2 || student[i - 1] === 2) {
        student[i]++;
        if (student[i + 1] === 2) {
          student[i + 1]--;
        } else if (student[i - 1] === 2) {
          student[i - 1]--;
        }
      }
    }
  }

  student.forEach((person) => {
    if (person > 0) {
      answer++;
    }
  });

  return answer;
}

let examples = {
  1: {
    n: 5,
    lost: [2, 4],
    reserve: [1, 3, 5],
  },
  2: {
    n: 5,
    lost: [2, 4],
    reserve: [3],
  },
  3: {
    n: 3,
    lost: [3],
    reserve: [1],
  },
};

console.log(solution(examples[3].n, examples[3].lost, examples[3].reserve));
console.log(solution(5, [1], [3]));
