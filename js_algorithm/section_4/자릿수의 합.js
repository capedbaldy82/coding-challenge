function solution(n, arr) {
  let answer;
  let max = 0;
  let maxValue = 0;

  arr.forEach((val) => {
    let temp = 0;
    let strVal = (val + "").split("");
    strVal.forEach((item) => {
      temp += parseInt(item, 10);
    });
    if (temp > max) {
      max = temp;
      maxValue = val;
    } else if (temp === max) {
      if (val > maxValue) {
        max = temp;
        maxValue = val;
      }
    }
  });

  answer = maxValue;

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
