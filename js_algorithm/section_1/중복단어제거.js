function solution(s) {
  let answer;

  // for (let x of s) {
  //   if (answer.indexOf(x) === -1) {
  //     answer.push(x);
  //   }
  // }

  answer = s.filter((word, idx) => s.indexOf(word) === idx);

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
