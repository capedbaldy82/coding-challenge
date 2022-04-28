function solution(num) {
  let answer;
  // let total = 1;

  // function DFS2(n) {
  //   if (n === num) {
  //     return;
  //   } else {
  //     total *= n + 1;
  //     DFS2(n + 1);
  //   }
  // }
  // DFS2(1);

  // answer = total;

  function DFS(n) {
    if (n === 1) return 1;
    else return n * DFS(n - 1);
  }

  answer = DFS(num);

  return answer;
}

const data = 5;
console.log(solution(data));
