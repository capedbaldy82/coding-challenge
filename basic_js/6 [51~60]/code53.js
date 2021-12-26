let data = "()())";

let count = 0;

const correctArrary = function (data) {
  for (let i = 0; i < data.length; i++) {
    if (count === 0 && data[i] === ")") {
      count = 999;
      break;
    } else if (data[i] === "(") {
      count += 1;
    } else if (data[i] === ")") {
      count -= 1;
    }
  }

  return count === 0 ? "YES" : "NO";
};

console.log(correctArrary(data));
