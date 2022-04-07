function solution(arr) {
  let answer = arr;

  for (let i = 1; i < arr.length; i++) {
    let idx = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[idx] < arr[j]) {
        [arr[idx], arr[j]] = [arr[j], arr[idx]];
        idx = j;
      } else break;
    }
  }

  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));

// 7 11 5 6 10 9
// 7 5 11
// 5 7 11 6 10 9
