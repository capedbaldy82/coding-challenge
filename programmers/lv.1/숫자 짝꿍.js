function solution(X, Y) {
  var answer = '';
  let ARRAY_X = Array.from({ length: 10 }, () => 0);
  let ARRAY_Y = Array.from({ length: 10 }, () => 0);
  let COMMON = [];

  X.split('').forEach((num) => ARRAY_X[num]++);
  Y.split('').forEach((num) => ARRAY_Y[num]++);

  for (let i = 0; i < 10; i++) {
    COMMON.push(Math.min(ARRAY_X[i], ARRAY_Y[i]));
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < COMMON[9 - i]; j++) {
      answer += 9 - i + '';
    }
  }

  if (answer === '') answer = -1;
  if (parseInt(answer, 10) === 0) answer = 0;

  return answer;
}

const data = [
  ['100', '2345'],
  ['100', '203045'],
  ['100', '123450'],
  ['12321', '42531'],
  ['5525', '1255'],
  ['30000', '301'],
];
console.log(solution(...data[5]));
