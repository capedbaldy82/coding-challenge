function solution(s) {
  let answer = "";

  // answer = s.replace(/A/g, "#");

  for (let x of s) {
    x === "A" ? (answer += "#") : (answer += x);
  }

  return answer;
}

let str = "BANANA";
console.log(solution(str));
