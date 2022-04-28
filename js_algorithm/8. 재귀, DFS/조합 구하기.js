function solution(n, m) {
  let answer = [];
  let p = Array.from({ length: m }, () => 0);

  function DFS(L, start) {
    if (L === m) {
      answer.push(p.slice());
      return;
    } else {
      for (let i = start; i <= n; i++) {
        p[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return answer;
}

const data = {
  n: 4,
  m: 2,
};

console.log(solution(data.n, data.m));
