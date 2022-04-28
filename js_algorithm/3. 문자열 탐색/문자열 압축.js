function solution(s) {
  let answer = "";
  let count = 1;
  s = s + " ";

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += s[i];
      if (count > 1) answer += count;
      count = 1;
    }
  }

  // let count = 0;
  // let flag = 0;

  // for (let i = 0; i < s.length; i++) {
  //   if (answer.indexOf(s[i], flag) > -1) {
  //     count++;
  //     if (i === s.length - 1) {
  //       answer += count;
  //     }
  //   } else {
  //     if (count > 0) {
  //       answer += count;
  //       flag = answer.length - 1;
  //     }
  //     answer += s[i];
  //     count = 1;
  //   }
  // }

  return answer;
}

let str = "KKHSSSSSEKKK";
console.log(solution(str));
