function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < arr.length) {
    sum += arr[right];
    while (sum > m) {
      sum -= arr[left++];
    }
    answer += right - left + 1;
    right++;
  }

  return answer;
}

let a = [1, 3, 1, 2, 3];

let start = new Date().getTime();
console.log(solution(5, a));
let end = new Date().getTime();

console.log(end - start);

// let sum = arr[left];

// while (left < arr.length) {
//   if (sum <= m) {
//     answer++;
//     console.log(`left:${left}, right:${right}, answer:${answer}`);
//     right++;
//     sum += arr[right];
//   } else {
//     left++;
//     right = left;
//     sum = arr[left];
//   }
// }
