function solution(s) {
  let answer = "";

  for (let x of s) {
    if (answer.indexOf(x) === -1) {
      answer += x;
    }
  }

  // 특정 문자열의 갯수 찾기
  // let pos = s.indexOf('k');
  // while (pos !== -1) {
  //   answer++;
  //   poa = s.indexOf('k', pos + 1);
  // }

  return answer;
}
console.log(solution("ksekkset"));
