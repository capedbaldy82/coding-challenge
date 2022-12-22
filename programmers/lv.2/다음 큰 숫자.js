function solution(n) {
  var answer = 0;
  let count = n.toString(2).split('1').length - 1;

  while (1) {
    n += 1;
    if (count === n.toString(2).split('1').length - 1) {
      answer = n;
      break;
    }
  }

  return answer;
}

const data = [78, 15, 31];
console.log(solution(data[0]));

// function getRange(n) {
//   let total = 1;
//   let count = 0;

//   while (n >= total) {
//     count++;
//     total = total * 2;
//   }

//   return count - 1;
// }

// function solution(n) {
//   var answer = 0;
//   const limit = 2 ** (getRange(n) + 2);
//   let arr = Array.from({ length: limit }, () => 0);
//   let count_one = n
//     .toString(2)
//     .split('')
//     .filter((num) => +num).length;

//   arr[1] = 1;
//   arr[2] = 1;
//   arr[3] = 2;

//   for (let i = 4; i <= limit; i++) {
//     const standard = getRange(i);
//     if (i < 2 ** standard + 2 ** standard / 2) {
//       arr[i] = arr[i - 2 ** standard / 2];
//     } else {
//       arr[i] = arr[i - 2 ** standard / 2] + 1;
//     }
//   }

//   for (let i = n + 1; i < limit; i++) {
//     if (count_one === arr[i]) {
//       answer = i;
//       break;
//     }
//   }

//   return answer;
// }
