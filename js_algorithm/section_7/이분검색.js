function solution(target, arr) {
  let answer = arr;
  let count = 0;

  arr.sort((a, b) => {
    return a - b;
  });

  answer = arr.indexOf(target) + 1;

  return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
