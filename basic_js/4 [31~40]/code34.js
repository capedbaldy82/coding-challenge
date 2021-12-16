let data = "176 156 155 165 166 169";
let temp = data
  .split(" ")
  .sort((a, b) => a - b)
  .join(" ");

if (data === temp) {
  console.log("YES");
} else {
  console.log("NO");
}
