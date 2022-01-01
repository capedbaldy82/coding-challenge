let data = "복잡한 세상 편하게 살자".split(" ");
let answer = "";

data.forEach((word) => {
  answer += word[0];
});

console.log(answer);
