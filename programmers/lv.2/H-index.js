function solution(citations) {
  var answer = Math.max(...citations);
  let flag = true;

  citations.sort((a, b) => a - b);

  return answer;
}

const data = [3, 0, 6, 1, 5];
console.log(solution(data));
