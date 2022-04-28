function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");

  if (s !== s.split("").reverse().join("")) answer = "NO";

  // let pureString = "";
  // s.split("").forEach((val, idx) => {
  //   let char = s.charCodeAt(idx);
  //   if ((char > 64 && char < 91) || (char > 96 && char < 123)) {
  //     pureString += val.toLowerCase();
  //   }
  // });

  // if (pureString !== pureString.split("").reverse().join("")) {
  //   answer = "NO";
  // }

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
