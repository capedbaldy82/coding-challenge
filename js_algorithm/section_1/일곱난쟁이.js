function solution(arr) {
  let answer = arr;
  let total = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (total - arr[i] - arr[j] === 100) {
        // answer = arr.filter((val, idx) => idx !== i && idx !== j);
        arr.splice(j, 1);
        arr.splice(i, 1);
        break;
      }
    }
  }

  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
console.log(arr);
