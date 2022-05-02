function solution(price, money, count) {
  var answer = 0;
  let total = Array.from({ length: count + 1 }, () => 0);

  total[1] = price;
  for (let i = 2; i <= count; i++) {
    total[i] = total[i - 1] + 3 * i;
  }

  console.log(total);

  if (total[count] > money) answer = total[count] - money;

  return answer;
}

console.log(solution(3, 20, 4));
