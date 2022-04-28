function solution(v, e, arr) {
  let answer = 0;
  let graph = Array.from(Array(v + 1), () => Array(v + 1).fill(0));
  let check = Array.from({ length: v + 1 }, () => 0);
  let p = Array.from({ length: v }, () => 0);
  let path = [];

  for (let [x, y] of arr) {
    graph[x][y] = 1;
  }

  function DFS(n) {
    if (n === v) {
      console.log(path);
      answer++;
    } else {
      for (let i = 1; i <= v; i++) {
        if (graph[n][i] === 1 && check[i] === 0) {
          check[i] = 1;
          path.push(i);
          DFS(i);
          check[i] = 0;
          path.pop();
        }
      }
    }
  }

  path.push(1);
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
