function solution(id_pw, db) {
  var answer = '';
  const [id, pw] = id_pw;

  for (let row of db) {
    if (id === row[0]) {
      if (pw === row[1]) {
        answer = 'login';
        break;
      } else {
        answer = 'wrong pw';
        break;
      }
    } else {
      answer = 'fail';
    }
  }

  //   db.filter((row) => row[0] === id);

  //   if (!db.length) return 'faile';

  //   for (let row of db) {
  //     if (pw === row[1]) {
  //       return 'login';
  //     }
  //   }

  //   return 'wrong pw';

  return answer;
}

const data = [
  [
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ],
  ],
  [
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ],
  ],
  [
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ],
  ],
];

console.log(solution(...data[2]));
