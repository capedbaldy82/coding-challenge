function solution(arr) {
  let answer = 0;
  let count = 0;

  arr.forEach((ele) => {
    if (ele === 1) {
      answer += 1 + count;
      count++;
    } else {
      count = 0;
    }
  });

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
