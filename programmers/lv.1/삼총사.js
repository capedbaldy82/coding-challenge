function solution(number) {
  var answer = 0;
  let p = [];

  const DFS = (L, start, sum) => {
    if (L === 3) {
      if (sum === 0) {
        answer++;
      }
      return;
    } else {
      for (let i = start; i < number.length; i++) {
        DFS(L + 1, i + 1, sum + number[i]);
      }
    }
  };

  DFS(0, 0, 0);

  return answer;
}

const data = [
  [-2, 3, 0, 2, -5],
  [-3, -2, -1, 0, 1, 2, 3],
  [-1, 1, -1, 1],
];
console.log(solution(data[1]));
