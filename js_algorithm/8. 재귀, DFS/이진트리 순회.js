function solution(n) {
  let answer = [];

  function DFS(num) {
    if (num > n) return;
    else {
      DFS(num * 2);
      answer.push(num);
      DFS(num * 2 + 1);
    }
  }

  DFS(1);

  return answer;
}

console.log(solution(7));
