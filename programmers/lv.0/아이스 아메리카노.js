function solution(money) {
  return [parseInt(money / 5500), money % 5500];
}

const data = [5500, 15000];
console.log(solution(data[1]));
