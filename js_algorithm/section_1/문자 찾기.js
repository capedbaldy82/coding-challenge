function solution(s, t) {
  let answer = 0;
  // let answer = s.split(t).length -1;

  for (let x of s) {
    if (x === t) {
      answer++;
    }
  }

  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
