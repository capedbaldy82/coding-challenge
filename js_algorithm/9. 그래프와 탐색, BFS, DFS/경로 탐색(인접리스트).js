function solution(v, e, arr) {
  let answer = 0;
  let graph = Array.from(Array(v + 1), () => Array());
  let check = Array.from({ length: v + 1 }, () => 0);

  for (let [x, y] of arr) {
    graph[x].push(y);
  }

  function DFS(n) {
    if (n === v) answer++;
    else {
      for (let i = 0; i < graph[n].length; i++) {
        if (check[graph[n][i]] === 0) {
          check[graph[n][i]] = 1;
          DFS(graph[n][i]);
          check[graph[n][i]] = 0;
        }
      }
    }
  }

  check[1] = 1;
  DFS(1);

  return answer;
}

const data = {
  v: 5,
  e: 9,
  arr: [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ],
};
console.log(solution(data.v, data.e, data.arr));
