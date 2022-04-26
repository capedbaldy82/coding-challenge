function solution(n, m, arr, multiples) {
  let answer = 0;
  let p = Array.from({ length: m }, () => 0);

  function DFS(L, start) {
    let total = 0;
    if (L === m) {
      for (let i = 0; i < m; i++) {
        total += p[i];
      }
      if (total % multiples === 0) answer++;
      return;
    } else {
      for (let i = start; i <= n; i++) {
        p[L] = arr[i - 1];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return answer;
}

const data = {
  n: 5,
  m: 3,
  arr: [2, 4, 5, 8, 12],
  multiples: 6,
};
console.log(solution(data.n, data.m, data.arr, data.multiples));
