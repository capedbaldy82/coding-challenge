function solution(polynomial) {
  let [variable, constant] = polynomial.split(' ').reduce(
    ([x, y], cur) => {
      if (cur.includes('x')) {
        return [x + (Number(cur.split('x')[0]) || 1), y];
      }
      if (cur.includes('+')) return [x, y];
      return [x, y + Number(cur)];
    },
    [0, 0]
  );

  // 변수와 상수 0
  if (!variable && !constant) return '0';
  // 변수만 0
  if (!variable) return constant + '';
  // 변수가 1인지 확인
  variable = variable === 1 ? 'x' : `${variable}x`;
  // 상수만 0
  if (!constant) return variable;
  // 전부 아닐 경우
  return `${variable} + ${constant}`;
}

const data = ['3x + 7 + x', 'x + x + x', 'x + 3 + 6', 'x + 1 + 2x', '1 + 3 + 4'];
data.forEach((test) => {
  console.log(solution(test));
});
