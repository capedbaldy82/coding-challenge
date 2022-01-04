let a = [1, 2, 3, 4];
let b = ["a", "b", "c", "d"];

let answer = [];

a.forEach((element, idx) => {
  if ((idx + 2) % 2 === 0) {
    answer.push([element, b[idx]]);
  } else {
    answer.push([b[idx], element]);
  }
});

console.log(answer);
