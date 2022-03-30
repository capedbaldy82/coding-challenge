var fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().split("\n");

let caseCount = parseInt(input[0], 10);
let words = input.slice(1);
let answer = 0;

for (let x = 0; x < caseCount; x++) {
  let flag = true;
  let stack = [];

  for (let i = 0; i < words[x].length; i++) {
    if (stack.indexOf(words[x][i]) === -1) {
      stack.push(words[x][i]);
    } else {
      if (stack.indexOf(words[x][i]) !== stack.length - 1) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    answer++;
  }
}

console.log(answer);
