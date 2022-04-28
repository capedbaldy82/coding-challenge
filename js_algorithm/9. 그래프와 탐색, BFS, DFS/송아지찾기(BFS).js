function solution(s, e) {
  let answer = 0;
  let queue = [];
  let check = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);

  check[s] = 1;
  queue.push(s);
  dis[s] = 0;

  while (queue.length) {
    let x = queue.shift();

    for (let nx of [x - 1, x + 1, x + 5]) {
      if (nx === e) return dis[x] + 1;
      if (nx > 0 && nx <= 10000 && check[nx] === 0) {
        check[nx] = 1;
        dis[nx] = dis[x] + 1;
        queue.push(nx);
      }
    }
  }

  return answer;
}

const data = {
  s: 5,
  e: 14,
};
console.log(solution(data.s, data.e));
