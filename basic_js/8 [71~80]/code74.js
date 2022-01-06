function bfs(graph, start, end) {
  let visited = [];
  let queue = [start];
  let count = 0;
  let answer = 0;

  while (queue.length !== 0) {
    let n = queue.shift();
    if (!visited.includes(n)) {
      visited.push(n);
      let sub = graph[n].filter((x) => !visited.includes(x));
      for (let i of sub) {
        queue.push(i);
      }
    }
  }

  // visitied로 거리값 계산
  visited.forEach((node) => {
    if (node === end) {
      answer = count;
    } else {
      count += 1;
    }
  });

  return answer;
}

let data = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

let data2 = {};
let count = 0;
let temp = [];

// 숫자로 이루어져있어 graph[n]에서 오류가 발생..
// 객체의 키와 밸류를 모두 문자열로 변환
for (key in data) {
  let value = Object.values(data);
  value[count].map((row) => {
    temp.push(row + "");
  });
  data2[key + ""] = temp;
  temp = [];
  count += 1;
}

console.log(bfs(data2, "1", "7"));
