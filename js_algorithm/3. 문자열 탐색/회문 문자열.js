function solution(s) {
  let answer = "YES";
  let reversedS = s.toLowerCase().split("").reverse().join("");
  s = s.toLowerCase();

  if (s !== reversedS) answer = "NO";

  // for (let i = 0; i < Math.floor(s.length / 2); i++) {
  //   if (s[i] !== s[s.length - i - 1]) {
  //     answer = "NO";
  //   }
  // }

  return answer;
}

let str = "goooG";
console.log(solution(str));
