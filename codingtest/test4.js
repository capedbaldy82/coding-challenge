function solution(v) {
  var answer = [0, 0, 0];
  let n = v.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function DFS(x, y, veget) {
    v[x][y] = 3;
    for (let k = 0; k < 4; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && v[nx][ny] === veget) {
        DFS(nx, ny, veget);
      }
    }
  }

  for (let a = 0; a < 3; a++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (v[i][j] === a) {
          DFS(i, j, a);
          answer[a]++;
        }
      }
    }
  }

  console.log(v);

  return answer;
}

const data = [
  [
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [2, 2, 2, 1],
    [0, 0, 0, 2],
  ],
  [0, 0, 1],
  [2, 2, 1],
  [0, 0, 0],
];
console.log(solution(data[0]));
