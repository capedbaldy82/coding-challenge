function solution(n, m, arr, multiples) {
  let answer = 0;
  let p = Array.from({ length: m }, () => 0);

  function DFS(L, start, sum) {
    if (L === m) {
      if (sum % multiples === 0) {
        console.log(p);
        answer++;
      }
      return;
    } else {
      for (let i = start; i < n; i++) {
        p[L] = arr[i];
        DFS(L + 1, i + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

const data = {
  n: 5,
  m: 3,
  arr: [2, 4, 5, 8, 12],
  multiples: 6,
};
console.log(solution(data.n, data.m, data.arr, data.multiples));
