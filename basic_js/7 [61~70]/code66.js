const solution = (data, rule) => {
  let answer = [];

  data.forEach((element) => {
    let temp = element.split("");
    let obj = {};
    let flag = true;

    temp.forEach((value, idx) => {
      obj[idx + 1] = value;
    });

    console.log(obj);

    rule.forEach((value, idx) => {
      if (idx === 0) {
      } else {
        for (key in obj) {
          if (idx < key) {
            if (obj[key] === rule[idx - 1]) {
              flag = false;
            }
          }
        }
      }
    });
    if (flag) {
      answer.push("가능");
    } else {
      answer.push("불가능");
      flag = true;
    }
  });

  return answer;
};

let data = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
let rule = "ABD".split("");
console.log(solution(data, rule));
