function solution(limit, dogs) {
  let answer = 0;
  let check = Array.from({ length: dogs.length + 1 }, () => 0);

  function DFS(num) {
    if (num > dogs.length) {
      let total = 0;
      for (let i = 1; i <= dogs.length; i++) {
        if (check[i] === 1) total += dogs[i - 1];
      }
      if (total > answer && total <= limit) answer = total;
      return;
    } else {
      check[num] = 1;
      DFS(num + 1);
      check[num] = 0;
      DFS(num + 1);
    }
  }

  DFS(1);

  return answer;
}

const data = [
  {
    limit: 259,
    dogs: [81, 58, 42, 33, 61],
  },
];

console.log(solution(data[0].limit, data[0].dogs));
