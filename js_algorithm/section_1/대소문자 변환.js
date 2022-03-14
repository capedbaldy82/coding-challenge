function solution(s) {
  let answer = "";

  for (let x of s) {
    x === x.toLowerCase()
      ? (answer += x.toUpperCase())
      : (answer += x.toLowerCase());
  }

  return answer;
}

console.log(solution("StuDY"));
