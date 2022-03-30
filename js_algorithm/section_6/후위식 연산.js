function solution(s) {
  let answer;
  let stack = [];

  for (let x of s) {
    stack.push(parseInt(x, 10));
    if (isNaN(x)) {
      stack.pop();
      let rt = stack.pop();
      let lt = stack.pop();
      let temp = eval(`${lt}${x}${rt}`);
      stack.push(temp);
    }
  }

  answer = stack[0];

  return answer;
}

let str = "352+*9-";
console.log(solution(str));
