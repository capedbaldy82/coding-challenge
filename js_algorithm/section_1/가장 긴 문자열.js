function solution(s) {
  let answer = "";
  let temp = 0;

  for (let x of s) {
    if (x.length >= temp) {
      temp = x.length;
      answer = x;
    }
  }

  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
