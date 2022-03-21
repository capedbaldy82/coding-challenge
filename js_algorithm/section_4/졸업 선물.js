function solution(m, product) {
  let answer = 0;
  let n = product.length;

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money = money - product[j][0] + product[j][1];
        cnt++;
      } else if (j !== i) {
        break;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(28, arr));
