function solution(arr) {
  let answer = [];

  arr.forEach((val) => {
    let reversedVal = parseInt((val + "").split("").reverse().join(""), 10);
    let flag = true;

    for (let i = 2; i <= parseInt(reversedVal / 2); i++) {
      if (reversedVal % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag && reversedVal !== 1) {
      answer.push(reversedVal);
    }
  });

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
