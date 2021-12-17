let scores = "97 86 75 66 55 97 85 97 97 95".split(" ").sort((a, b) => a - b);
let tempArr = [];
let howCandy = 0;

while (tempArr.length < 3) {
  let temp = scores.pop();
  if (tempArr.indexOf(temp) === -1) {
    tempArr.push(temp);
  }
  howCandy++;
}

console.log(tempArr);
console.log(howCandy);
