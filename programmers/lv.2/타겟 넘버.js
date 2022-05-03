function solution(numbers, target) {
  var answer = 0;
  let p = Array.from({ length: numbers.length }, () => 0);

  function DFS(L, sum) {
    if (L === numbers.length) {
      if (sum > target) return;
      if (sum === target) {
        answer++;
      }
      return;
    } else {
      p[L] = numbers[L];
      DFS(L + 1, sum + numbers[L]);
      p[L] = -numbers[L];
      DFS(L + 1, sum - numbers[L]);
      p[L] = 0;
    }
  }

  DFS(0, 0);

  return answer;
}

const data = [
  { numbers: [1, 1, 1, 1, 1], target: 3 },
  { numbers: [4, 1, 2, 1], target: 4 },
];

console.log(solution(data[0].numbers, data[0].target));
