function solution(name, yearning, photo) {
  var answer = [];
  let scoreOfPerson = {};

  // 사람 별 점수 객체 생성
  for (let i = 0; i < name.length; i++) {
    scoreOfPerson[name[i]] = yearning[i];
  }

  // 사진 별 점수 책정 및 추가
  for (let people of photo) {
    let total = 0;
    for (let person of people) {
      if (scoreOfPerson[person]) total += scoreOfPerson[person];
    }
    answer.push(total);
  }

  return photo.map((people) =>
    people.reduce((acc, cur) => (acc += yearning[name.indexOf(cur)] || 0), 0)
  );
}

const data = [
  [
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
  ],
  [
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ],
  ],
  [
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
  ],
];

console.log(solution(...data[0]));
