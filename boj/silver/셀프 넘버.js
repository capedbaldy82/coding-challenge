let sum = 0;
let notself = Array(10001);

for (let i = 0; i <= 10000; i++) {
  sum =
    i +
    parseInt((i + "").split("").reduce((a, b) => parseInt(a) + parseInt(b)));
  notself[sum] = true;
}

for (let i = 0; i <= 10000; i++) {
  if (!notself[i]) {
    console.log(i);
  }
}
