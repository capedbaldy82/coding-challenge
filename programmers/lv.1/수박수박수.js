function solution(n) {
  var answer = "";

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (answer += "수") : (answer += "박");
  }

  return answer;
}

const testCase = [3, 4];

console.log(solution(testCase[1]));
