function solution(m, arr) {
  let answer = 0;
  let left = 0;
  let right = 0;
  let sum = 0;

  while (right < arr.length) {
    if (sum < m) {
      sum += arr[++right];
    } else if (sum > m) {
      sum -= arr[left++];
    } else {
      answer++;
      sum += arr[++right];
    }
  }

  return answer;
}

let a = [1, 1, 1, 2, 4, 1, 1, 2];
let start = new Date();
console.log(solution(6, a));
let end = new Date();

console.log(`time ${end - start}`);

// for (let i = 0; i < arr.length; i++) {
//   let total = arr[i];
//   let tempArr = [arr[i]];
//   for (let j = i + 1; j < arr.length; j++) {
//     if (total < m) {
//       total += arr[j];
//       tempArr.push(arr[j]);
//     } else if (total === m) {
//       answer++;
//       break;
//     }
//   }
// }
