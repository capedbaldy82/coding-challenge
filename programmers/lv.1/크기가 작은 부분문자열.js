function solution(t, p) {
  var answer = 0;
  const differ = parseInt(p, 10);

  for (let i = 0; i < t.length - p.length + 1; i++) {
    let part = '';
    for (let j = i; j < i + p.length; j++) {
      part += t[j];
    }
    if (parseInt(part, 10) <= differ) answer++;
  }

  return answer;
}

const data = [
  ['3141592', '271'],
  ['500220839878', '7'],
  ['10203', '15'],
];
console.log(solution(...data[2]));
