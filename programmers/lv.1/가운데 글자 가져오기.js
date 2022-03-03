function solution(s) {
  var answer = "";
  const center = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    answer = s.substr(center - 1, 2);
  } else {
    answer = s.substr(center, 1);
  }

  return answer;
}

const testCase = ["abcde", "qwer"];

console.log(solution(testCase[1]));
