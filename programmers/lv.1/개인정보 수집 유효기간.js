function solution(today, terms, privacies) {
  var answer = [];
  let standard = new Date(today.substr(0, 10));
  let addMonth = {};

  for (let term of terms) {
    let [type, month] = term.split(' ');
    addMonth[type] = parseInt(month, 10);
  }

  for (let i = 0; i < privacies.length; i++) {
    let limit_date = new Date(privacies[i].substr(0, 10));
    let term = addMonth[privacies[i][privacies[i].length - 1]];

    limit_date.setMonth(limit_date.getMonth() + term);

    if (limit_date.getTime() <= standard.getTime()) {
      answer.push(i + 1);
    }
  }

  return answer;
}

const data = [
  [
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ],
  [
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z'],
  ],
];
console.log(solution(...data[0]));
