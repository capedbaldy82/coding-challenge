const data = prompt("문장을 입력하시오. ");
let temp = "";

for (let i = 0; i < data.length; i++) {
  temp += data[data.length - 1 - i];
}

console.log(temp);

// const reversString = data.split('').reverse().join('');
