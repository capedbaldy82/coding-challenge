function solution(s) {
  let stack = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') ++stack;
    else {
      --stack;
      if (stack < 0) break;
    }
  }

  return !stack;
}

const data = ['()()', '(())()', ')()(', '(()('];
const test = [')(()))'];
console.log(solution(test[0]));
