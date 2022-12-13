function solution(s) {
  var answer = [];
  let temp = [];

  for (let i = 0; i < s.length; i++) {
    const near = temp.indexOf(s[i]);
    if (near === -1) {
      temp.push(s[i]);
      answer.push(-1);
    } else {
      answer.push(i - temp.indexOf(s[i]));
      temp[temp.indexOf(s[i])] = 0;
      temp.push(s[i]);
    }
  }

  return answer;
}

const data = [
  ['banana', [-1, -1, -1, 2, 2, 2]],
  ['foobar', [-1, -1, 1, -1, -1, -1]],
];
console.log(solution(...data[0]));
