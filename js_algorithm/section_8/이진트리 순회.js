function solution(n) {
  let answer = [];

  function DFS(num) {
    if (num > 7) return;
    else {
      DFS(num * 2);
      DFS(num * 2 + 1);
      answer.push(num);
    }
  }

  DFS(n);

  return answer;
}

console.log(solution(1));
