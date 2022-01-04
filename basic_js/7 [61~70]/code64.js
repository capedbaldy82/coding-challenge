let data = parseInt("24", 10);
let answer = 0;

while (true) {
  if (data % 7 === 0) {
    answer += data / 7;
    console.log(answer);
    break;
  }
  data -= 3;
  answer += 1;
  if (data < 0) {
    console.log(-1);
    break;
  }
}
