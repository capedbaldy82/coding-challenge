let limit = parseInt("50");
let friends = parseInt("5");
let total = 0;
let count = 0;

for (let i = 0; i < friends; i++) {
  total += parseInt("20");
  if (total < limit) {
    count++;
  }
}

console.log(count);
