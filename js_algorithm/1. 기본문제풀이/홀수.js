function solution(arr) {
  let answer = [];
  let total = 0;
  let oddArr = arr.filter((val) => val % 2 === 1);

  oddArr.forEach((val) => (total += val));

  answer.push(total);
  answer.push(Math.min(...oddArr));

  return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
