function solution(n, r) {
  let answer = 0;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r === n || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }

  answer = DFS(n, r);

  return answer;
}

const data = {
  n: 33,
  r: 19,
};

console.log(solution(data.n, data.r));
