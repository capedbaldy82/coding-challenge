const solution = (data) => {
  data = data.replace(/1/g, "f").split("\n");

  for (let i = 0; i < data.length; i++) {
    data[i] = data[i].split(" ");
  }

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i][j] === "f") {
        if (i < j && data[i][j + 1] !== "f") {
          data[i][j + 1] = "*";
        }
        if (j > 0 && data[i][j - 1] !== "f") {
          data[i][j - 1] = "*";
        }
        if (i > 0 && data[i - 1][j] !== "f") {
          data[i - 1][j] = "*";
        }
        if (i < 4 && data[i + 1][j] !== "f") {
          data[i + 1][j] = "*";
        }
      }
    }
  }

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
};

let data = "1 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0";

solution(data);
