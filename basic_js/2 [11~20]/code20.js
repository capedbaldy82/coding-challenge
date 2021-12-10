let data = prompt().split(" ");

console.log(
  parseInt(data[0]) / parseInt(data[1]) +
    " " +
    (parseInt(data[0]) % parseInt(data[1]))
);
