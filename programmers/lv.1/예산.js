function solution(d, budget) {
  var answer = 0;
  let check = Array.from({ length: d.length }, () => 0);

  function DFS(L, total) {
    console.log(`check: ${check}, total: ${total}, Level: ${L}`);
    if (total > budget) return;
    if (total === budget) {
      if (answer < L) {
        answer = L;
      }
    } else {
      for (let i = 0; i < d.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          DFS(L + 1, total + d[i]);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);

  return answer;
}

console.log(solution([1, 3, 2, 5, 3], 9));
