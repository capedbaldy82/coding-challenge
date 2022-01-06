const solution = (data) => {
  data = parseInt(data);
  let noClap = [1, 2, 4, 5, 7, 8, 0];
  let count = 0;
  let flag = false;
  for (let i = 1; i < data + 1; i++) {
    (i + "").split("").forEach((num) => {
      if (noClap.includes(parseInt(num))) {
        flag = true;
      }
    });
    if (!flag) {
      count += 1;
    } else {
      flag = false;
    }
  }

  return count;
};

let data = "93";

console.log(solution(data));
