function solution(number, many) {
  let answer = [];
  let temp = Array.from({ length: many }, () => 0);
  let check = Array.from({ length: number.length }, () => 0);

  function DFS(n) {
    if (n === many) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = 0; i < number.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp[n] = number[i];
          DFS(n + 1);
          check[i] = 0;
        }
        // temp[n] = number[i];
        // DFS(n + 1);
      }
    }
  }

  DFS(0);

  return answer;
}

const data = {
  number: [3, 6, 9],
  many: 2,
};

console.log(solution(data.number, data.many));
