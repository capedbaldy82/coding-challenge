function solution(S, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  let tempArr = S.split("");
  let SArr = [];

  for (let i = 0; i < tempArr.length; i++) {
    if (i % K === 0 && i !== 0) {
      if (tempArr[i - 1] !== " " && tempArr[i] !== " ") {
        return -1;
      }
      SArr.push(tempArr.slice(i - K, i));
    }
    if (i === tempArr.length - 1) {
      SArr.push(tempArr.slice(i - (i % K)));
    }
  }

  answer = SArr.length;

  return answer;
}

console.log(solution("SMS messages are really short", 12));
