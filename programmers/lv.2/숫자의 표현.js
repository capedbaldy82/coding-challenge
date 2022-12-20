function solution(n) {
  var answer = 0;
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let sum = 0;
  let [left, right] = [0, 0];
  let limit = n / 2;

  while (right < limit) {
    sum += arr[right];
    right += 1;

    while (sum > n) {
      sum -= arr[left];
      left += 1;
    }

    if (sum === n) {
      answer += 1;
    }
  }

  return n === 1 ? 1 : answer + 1;
}

// 1,2,3,4,5
// 4,5,6
// 7,8
// 15
const data = [15, 11, 1];
console.log(solution(data[2]));
