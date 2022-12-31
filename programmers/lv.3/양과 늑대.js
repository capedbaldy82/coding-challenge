function solution(info, edge) {
  var answer = 0;
  let connectedNode = Array.from({ length: info.length }, () => []);

  for (let node of edge) {
    connectedNode[node[0]].push(node[1]);
  }

  function DFS(currentNode, sheep, wolf, nextNodes) {
    if (info[currentNode]) wolf++;
    else sheep++;

    if (sheep === wolf) return;

    answer = Math.max(answer, sheep);

    let nextNodesArray = [...nextNodes];
    let currentIndex = nextNodesArray.indexOf(currentNode);

    nextNodesArray.push(...connectedNode[currentNode]);
    nextNodesArray.splice(currentIndex, 1);

    for (let nextNode of nextNodesArray) {
      DFS(nextNode, sheep, wolf, nextNodesArray);
    }
  }

  DFS(0, 0, 0, [0]);

  return answer;
}

const data = [
  [
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ],
  ],
  [
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ],
  ],
];
console.log(solution(...data[1]));
