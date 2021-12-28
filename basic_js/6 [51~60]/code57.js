let data = [];
let count = 0;

for (let i = 0; i <= 1000; i++) {
  data.push(i);
}

data = data.join("").split("");

data.map((num) => {
  if (num === "1") {
    count++;
  }
});

console.log(count);
