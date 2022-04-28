function solution(n, arr) {
  let answer = 'NO';
  let left = Array.from({ length: n + 1 }, () => 0);
  let right = Array.from({ length: n + 1 }, () => 0);

  function DFS(num) {
    if (num > n) {
      let total_left = 0;
      let total_right = 0;
      for (let i = 1; i <= n; i++) {
        if (left[i] === 1) total_left += arr[i - 1];
        if (right[i] === 1) total_right += arr[i - 1];
      }
      // console.log(left, right);
      if (total_left === total_right) answer = 'YES';
      return;
    } else {
      left[num] = 1;
      right[num] = 0;
      DFS(num + 1);
      left[num] = 0;
      right[num] = 1;
      DFS(num + 1);
    }
  }

  DFS(1);

  return answer;
}

const data = [6, [1, 3, 5, 6, 7, 10]];
console.log(solution(data[0], data[1]));
