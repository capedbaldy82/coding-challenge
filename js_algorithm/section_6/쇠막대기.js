function solution(s) {
  let answer = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        stack.pop();
        stack.pop();
        answer += stack.length;
      } else {
        stack.pop();
        stack.pop();
        answer += 1;
      }
    }
  }

  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a));
