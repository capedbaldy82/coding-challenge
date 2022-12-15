function solution(s) {
  let answer = 0;
  let temp = '';
  let [base, other] = [0, 0];

  for (let char of s) {
    if (temp === '') temp = char;

    if (temp === char) base++;
    else other++;

    if (base === other) {
      answer++;
      temp = '';
      base = 0;
      other = 0;
    }
  }

  return temp ? answer++ : answer;
}

const data = ['banana', 'abracadabra', 'aaabbaccccabba'];
const test = ['aaaaa', 'bna', 'abbbbbb'];
console.log(solution(data[0]));
