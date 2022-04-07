function solution(arr) {
  let answer = arr;

  arr.sort(([x1, y1], [x2, y2]) => {
    if (x1 === x2) return y1 - y2;
    else return x1 - x2;
  });

  return answer;
}

let arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
