function solution(num, max) {
  let answer = [];
  let check = Array.from({ length: max }, () => 0);

  function DFS(n) {
    if (n === max) {
      answer.push([...check]);
      return;
    } else {
      for (let i = 1; i <= num; i++) {
        check[n] = i;
        DFS(n + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

const data = [
  {
    num: 3,
    max: 2,
  },
];

console.log(solution(data[0].num, data[0].max));
