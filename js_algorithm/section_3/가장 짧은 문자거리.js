function solution(s, t) {
  let answer = [];
  let distance = 1000;

  for (let x of s) {
    if (x === t) {
      distance = 0;
      answer.push(distance);
    } else {
      distance++;
      answer.push(distance);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      distance = 0;
    } else {
      distance++;
      answer[i] = Math.min(answer[i], distance);
    }
  }

  // for (let x of s) {
  //   x === t ? tempArr.push(0) : tempArr.push(x);
  // }

  // for (let x = 0; x < tempArr.length; x++) {
  //   if (tempArr[x] !== 0) {
  //     let count = 0;
  //     for (let i = 0; i < tempArr.length; i++) {
  //       if (tempArr[i] === 0) {
  //         tempDis.push(Math.abs(tempArr.indexOf(tempArr[i], count - 1) - x));
  //       }
  //       count++;
  //     }
  //     answer.push(Math.min(...tempDis));
  //     tempDis = [];
  //   } else {
  //     answer.push(tempArr[x]);
  //   }
  // }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
