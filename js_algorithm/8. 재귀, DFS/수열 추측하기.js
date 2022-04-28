function solution(many, sum) {
  let answer,
    flag = 0;
  let dy = Array.from(Array(11), () => Array(11).fill(0));
  let check = Array.from({ length: many + 1 }, () => 0);
  let p = Array.from({ length: many }, () => 0);
  // let p = [];
  let b = Array.from({ length: many }, () => 0);

  // Memoization을 통한 이미 구한 값 계산 방지
  function Combi(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (r === n || r === 0) return 1;
    else return (dy[n][r] = Combi(n - 1, r - 1) + Combi(n - 1, r));
  }

  // DFS
  function DFS(L, total) {
    if (flag) return;
    if (L === many) console.log(p);
    if (L === many && total === sum) {
      answer = p.slice();
      flag = 1;
    } else {
      for (let i = 1; i <= many; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          p[L] = i;
          // p.push(i);
          DFS(L + 1, total + b[L] * p[L]);
          check[i] = 0;
          // p.pop();
        }
      }
    }
  }

  // 파스칼의 삼각형에서 1 3 3 1 을 구하기 위함이다.
  // 여기서 1 3 3 1 이란 밑변이 정상에 도착했을 때 더해지는 경우의 수다.
  // 이를 통해 이후 구해지는 수열에 곱하여 정상의 최종 숫자를 구할 수 있다.
  //  n-1C0, n-1C1, n-1C2, n-1C3.....
  for (let i = 0; i < many; i++) {
    b[i] = Combi(many - 1, i);
  }
  DFS(0, 0);

  return answer;
}

const data = {
  many: 4,
  sum: 16,
};
console.log(solution(data.many, data.sum));
