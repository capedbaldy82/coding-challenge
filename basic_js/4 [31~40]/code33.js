let data = "1 2 3 4 5".split(" ").reverse();
let result = "";

for (let i = 0; i < data.length; i++) {
  result += data[i] + " ";
}

console.log(result);
