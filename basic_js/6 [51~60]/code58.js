let data = "1234567891234"
  .split("")
  .map((e) => parseInt(e))
  .reverse();
let answer = [];

for (let i = 0; i < data.length; i++) {
  answer.push(data[i]);
  if (i % 3 === 2 && i !== data.length - 1) {
    answer.push(",");
  }
}
answer = answer.reverse().join("");

console.log(answer);
