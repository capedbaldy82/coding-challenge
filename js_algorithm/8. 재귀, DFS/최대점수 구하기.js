function solution(n, arr) {
  let answer = 0;
  let check = Array.from({ length: arr.length + 1 }, () => 0);

  function DFS(num) {
    if (num > arr.length) {
      let total = 0;
      let time = 0;
      for (let i = 1; i <= arr.length; i++) {
        if (check[i] === 1) {
          total += arr[i - 1][0];
          time += arr[i - 1][1];
        }
      }
      if (total > answer && time <= n) answer = total;
      return;
    } else {
      check[num] = 1;
      DFS(num + 1);
      check[num] = 0;
      DFS(num + 1);
    }
  }

  DFS(1);

  return answer;
}

const data = [
  {
    limit: 20,
    solve: [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
  },
];

console.log(solution(data[0].limit, data[0].solve));
