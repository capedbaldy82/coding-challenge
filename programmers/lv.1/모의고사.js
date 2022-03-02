function solution(answers) {
  var answer = [];
  let correct = [0, 0, 0];

  const one_answer = [1, 2, 3, 4, 5];
  const two_answer = [2, 1, 2, 3, 2, 4, 2, 5];
  const three_answer = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const one = [];
  const two = [];
  const three = [];

  for (let i = 0; i < answers.length; i++) {
    one.push(one_answer[i % 5]);
    two.push(two_answer[i % 8]);
    three.push(three_answer[i % 10]);
  }

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i]) correct[0]++;
    if (answers[i] === two[i]) correct[1]++;
    if (answers[i] === three[i]) correct[2]++;
  }

  const MAX = Math.max(...correct);

  for (let i = 0; i < correct.length; i++) {
    if (MAX === correct[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}

const testCase = [
  [1, 2, 3, 4, 5],
  [1, 3, 2, 4, 2],
];

console.log(solution(testCase[1]));
