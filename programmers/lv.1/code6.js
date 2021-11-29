// function solution(numbers) {
//   var answer = 0;
//   let num;
//   let num_count = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   for (let i = 0; i < numbers.length; i++) {
//     remove_num = num_count.indexOf(numbers[i]);
//     num_count.splice(remove_num, 1);
//   }

//   console.log(num_count);

//   num_count.map((num) => (answer += num));

//   return answer;
// }

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc);
}

let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
let answer = solution(numbers);
console.log(answer);
