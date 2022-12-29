function isCorrectBracket(n) {
  let stack = [];

  for (let i = 0; i < n.length; i++) {
    if (stack[stack.length - 1] === '[' && n[i] === ']') {
      stack.pop();
    } else if (stack[stack.length - 1] === '{' && n[i] === '}') {
      stack.pop();
    } else if (stack[stack.length - 1] === '(' && n[i] === ')') {
      stack.pop();
    } else {
      stack.push(n[i]);
    }
  }

  return !stack.length;
}

function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    let part = s.substr(0, 1);
    let rest = s.substr(1);
    s = rest + part;

    if (isCorrectBracket(s)) answer++;
  }

  return answer;
}

const data = ['[](){}', '}]()[{', '[)(]', '}}}'];
console.log(solution(data[1]));
