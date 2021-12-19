let data = parseInt("29");
let flag = true;

for (let i = 2; i < data; i++) {
  if (data % i === 0) {
    flag = false;
  }
}

console.log(flag ? "YES" : "NO");
