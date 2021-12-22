let data = "AAABBBcccddd".split("");

let answer = "";

data.forEach((e) => {
  if (e.charCodeAt() < 91) {
    answer += e.toLowerCase();
  } else {
    answer += e.toUpperCase();
  }
});

console.log(answer);
