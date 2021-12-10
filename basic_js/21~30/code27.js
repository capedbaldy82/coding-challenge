let names = prompt().split(" ");
let scores = prompt().split(" ");
let data = {};

for (let i = 0; i < names.length; i++) {
  data[names[i]] = scores[i];
}

console.log(data);
