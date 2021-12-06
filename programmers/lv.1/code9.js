function SliceOutput(totalArr, command) {
  let result = totalArr.slice(command[0] - 1, command[1]);
  result.sort((a, b) => a - b);
  return result[command[2] - 1];
}

function solution(array, commands) {
  var answer = [];

  commands.forEach((item) => {
    answer.push(SliceOutput(array, item));
  });

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
const answer = solution(array, commands);
console.log(answer);
