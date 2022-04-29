function solution(arr, change) {
  let answer = Number.MAX_SAFE_INTEGER;
  let dy = Array.from({ length: change + 1 }, () => 1000);

  dy[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j <= change; j++) {
      dy[j] = Math.min(dy[j], dy[j - arr[i]] + 1);
    }
  }

  answer = dy[change];
  return answer;
}

const data = {
  arr: [1, 2, 5],
  change: 15,
};
console.log(solution(data.arr, data.change));
