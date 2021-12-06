function solution(absolutes, signs) {
  var answer = 0;
  let count = 0;

  absolutes.forEach(function (num) {
    answer += signs[count] ? num : -num;
    count++;
  });

  return answer;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];
const answer = solution(absolutes, signs);
console.log(answer);
