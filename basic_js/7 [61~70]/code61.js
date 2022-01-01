let data = "aaabbbbcdddd".split("");

let count = 0;
let temp = data[0];
let answer = data[0];

data.forEach((char, idx) => {
  if (char === temp) {
    count += 1;
    if (idx === data.length - 1) {
      answer += count;
    }
  } else {
    answer += count + char;
    temp = char;
    count = 1;
  }
});

console.log(answer);
