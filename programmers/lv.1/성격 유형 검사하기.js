function solution(survey, choices) {
  var answer = '';
  let indicator = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  let score = [0, 0, 0, 0, 0, 0, 0, 0];

  // 항목 별 점수 계산
  for (let i = 0; i < choices.length; i++) {
    if (choices[i] > 4) {
      score[indicator.indexOf(survey[i][1])] += choices[i] - 4;
    }
    if (choices[i] < 4) {
      score[indicator.indexOf(survey[i][0])] += 4 - choices[i];
    }
  }

  // 점수 별 항목 부여
  for (let i = 0; i < score.length; i += 2) {
    if (score[i] >= score[i + 1]) {
      answer += indicator[i];
    } else {
      answer += indicator[i + 1];
    }
  }

  return answer;
}

const data = [
  [
    ['AN', 'CF', 'MJ', 'RT', 'NA'],
    [5, 3, 2, 7, 5],
  ],
  [
    ['TR', 'RT', 'TR'],
    [7, 1, 3],
  ],
];
console.log(solution(...data[0]));
// RT CF JM AN
