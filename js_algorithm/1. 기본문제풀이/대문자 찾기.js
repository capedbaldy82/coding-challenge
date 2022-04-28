function solution(s) {
  let answer = 0;

  for (let x of s) {
    if (x.toUpperCase() === x) answer++;
  }

  // for (let i = 0; i < s.length; i++) {
  //   if (s.charCodeAt(i) > 64 && s.charCodeAt(i) < 91) {
  //     answer++;
  //   }
  // }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
