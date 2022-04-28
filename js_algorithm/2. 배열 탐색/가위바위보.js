function solution(a, b) {
  let answer = "";

  a.forEach((ele, idx) => {
    if (ele - b[idx] === 0) {
      answer += "D";
    } else if (ele - b[idx] === 1 || ele - b[idx] === -2) {
      answer += "A";
    } else {
      answer += "B";
    }
  });

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
