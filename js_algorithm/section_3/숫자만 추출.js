function solution(str) {
  let answer = 0;

  // answer = parseInt(str.replace(/[a-zA-Z]/g, ""),10);

  for (let x of str) {
    if (!isNaN(x)) {
      answer = answer * 10 + parseInt(x);
    }
  }

  return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
