function solution(coins, change) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(l, sum) {
    if (sum > change) return;
    if (l >= answer) return;
    if (sum === change) {
      console.log(l, sum);
      answer = Math.min(answer, l);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(l + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

const data = {
  coins: [1, 2, 5],
  change: 15,
};

console.log(solution(data.coins, data.change));
