function solution(citations) {
  var answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i + 1 <= citations[i]) {
      answer++;
    }
  }

  return answer;
}

const data = [3, 0, 6, 1, 5];
console.log(solution(data));
