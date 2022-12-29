function solution(s) {
  var answer = [];
  let temp = '';

  // 2차원 배열로 만들기
  for (let i = 2; i < s.length - 2; i++) {
    temp += s[i];
  }
  s = temp.split('},{').map((val) => val.split(',').map((num) => +num));

  // 배열 길이 순으로 정렬
  s.sort((a, b) => a.length - b.length);

  let usedNum = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!answer.includes(s[i][j])) {
        answer.push(s[i][j]);
      }
    }
  }

  return answer;
}

const data = [
  '{{2},{2,1},{2,1,3},{2,1,3,4}}',
  '{{1,2,3},{2,1},{1,2,4,3},{2}}',
  '{{20,111},{111}}',
  '{{123}}',
  '{{4,2,3},{3},{2,3,4,1},{2,3}}',
];
console.log(solution(data[4]));
