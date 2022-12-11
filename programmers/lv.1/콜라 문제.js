function solution(a, b, n) {
  var answer = 0;

  const DFS = (bottles) => {
    if (bottles < a) {
      return;
    } else {
      answer += Math.floor(bottles / a) * b;
      DFS(Math.floor(bottles / a) * b + (bottles % a));
    }
  };

  DFS(n);

  return answer;
}

const data = [
  [2, 1, 20],
  [3, 1, 20],
];
console.log(solution(...data[0]));
