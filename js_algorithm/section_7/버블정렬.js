function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));

// 5 11 7 13 15 23
// 5 7 11 13 15 23

//[13,7,11,23,5,15]
// 7 11 13 5 15 23
// 7 11 5 13 15 23
// 7 5 11 13 15 23
// 5 7 11 13 15 23
