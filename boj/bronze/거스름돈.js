function solution(money) {
  let cash = 1000 - parseInt(money, 10);
  let cnt = 0;
  let coins = [500, 100, 50, 10, 5, 1];

  for (let coin of coins) {
    let divide = parseInt(cash / coin, 10);
    if (divide >= 1) {
      cnt += divide;
      cash -= divide * coin;
      if (cash <= 0) break;
    }
  }

  return cnt;
}

console.log(solution(1));

// 999 + 0 => 0
// 499 + 1 => 1
// 99 + 4 => 5
// 49 + 1 => 6
// 9 + 4 => 10
// 4 + 1 => 11
// 0 + 4 => 15
