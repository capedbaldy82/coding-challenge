function count(stable, mid) {
  let cnt = 1;
  let end = 1;

  for (let x of stable) {
    if (x - end >= mid) {
      cnt++;
      end = x;
    }
  }

  return cnt;
}

function solution(c, stable) {
  let answer;
  let left = 1;
  let right = Math.max(...stable);

  stable.sort((a, b) => a - b);

  console.log(stable);

  while (left <= right) {
    let mid = parseInt((left + right) / 2, 10);
    let cnt = count(stable, mid);

    if (cnt >= c) {
      answer = cnt;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

let arr = [1, 2, 4, 8, 9];
console.log(solution(3, arr));
