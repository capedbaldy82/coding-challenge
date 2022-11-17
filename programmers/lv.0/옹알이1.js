function solution(babbling) {
  var answer = 0;
  let words = ['aya', 'ye', 'woo', 'ma'];

  for (let i = 0; i < babbling.length; i++) {
    let count = 0;
    for (let j = 0; j < 4; j++) {
      if (babbling[i].split(words[j]).length == 2) {
        count += words[j].length;
      }
    }
    if (count === babbling[i].length) {
      answer++;
    }
  }

  return answer;
}

const data = [
  ['aya', 'yee', 'u', 'maa', 'wyeoo'],
  ['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'],
];

console.log(solution(data[1]));
