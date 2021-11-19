function solution(lottos, win_nums) {
  let same = 0;
  let zero = 0;
  let high,
    low = 0;
  for (let i = 0; i < 6; i++) {
    if (lottos[i] !== 0) {
      for (let j = 0; j < 6; j++) {
        if (lottos[i] == win_nums[j]) {
          same += 1;
        }
      }
    }
    if (lottos[i] == 0) {
      zero += 1;
    }
  }
  if (same == 0 && zero == 0) {
    high = 6;
  } else {
    high = 7 - same - zero;
  }

  if (zero == 6) {
    low = 7 - 1;
  } else {
    if (same == 0) {
      low = 7 - 1;
    } else {
      low = 7 - same;
    }
  }
  const answer = [high, low];

  return answer;
}

let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
answer = solution(lottos, win_nums);
console.log(answer);
