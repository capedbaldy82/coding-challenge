function solution(survey, choices) {
  var answer = '';
  let character = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  let score = Array.from({ length: 8 }, () => 0);
  // let score = [{ R: 0, T: 0 }, { C: 0, F: 0 }, , { J: 0, M: 0 }, { A: 0, N: 0 }];

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] - 4 > 0) {
      score[character.indexOf(survey[i][1])] += choices[i] - 4;
    } else {
      score[character.indexOf(survey[i][0])] += -(choices[i] - 4);
    }
  }

  for (let i = 0; i < 8; i += 2) {
    if (score[i] >= score[i + 1]) {
      answer += character[i];
    } else {
      answer += character[i + 1];
    }
  }

  return answer;
}

// 1. 같은 점수는 사전형으로 선택
// 2. 7개 문항

// RT, CF, JM, AN
// TR, FC, MJ, NA

// N1 C1 M2 T3 A1
const data = [
  {
    survey: ['AN', 'CF', 'MJ', 'RT', 'NA'],
    choices: [5, 3, 2, 7, 5],
  },
  {
    survey: ['TR', 'RT', 'TR'],
    choices: [7, 1, 3],
  },
];
console.log(solution(data[1].survey, data[1].choices));
