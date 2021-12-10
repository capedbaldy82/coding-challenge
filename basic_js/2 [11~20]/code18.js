let scores = prompt("점수를 공백으로 구분하여 입력하시오: ").split(" ");
let total = 0;

for (let i = 0; i < scores.length; i++) {
  total += parseInt(scores[i]);
}

console.log(total / scores.length);
