function dfs(graph, start, end) {
  let visited = [];
  let stack = [start];
  let answer = 0;

  while (stack.length !== 0) {
    let n = stack.pop();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      }
    }
  }

  for (let i = 0; i < visited.length; i++) {
    if (visited[i] === end) {
      break;
    } else {
      answer += 1;
    }
  }

  return answer;
}

let data = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

console.log(dfs(data, "A", "F"));
