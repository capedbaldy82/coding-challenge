function solution(babbling) {
  let answer = 0;
  let canPronounce = ['aya', 'ye', 'woo', 'ma'];

  // 숫자로 변환
  babbling = babbling
    .map((num) => {
      for (let i = 0; i < canPronounce.length; i++) {
        num = num.split(canPronounce[i]).join(i + 1);
      }
      return num;
    })
    .filter((num) => num === parseInt(num, 10) + '');

  // 연속된 숫자 제거
  for (let word of babbling) {
    let flag = true;
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }

  return answer;
}

const data = [
  ['aya', 'yee', 'u', 'maa'],
  ['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'],
  ['yemaye', 'yemayemaye', 'ayayemaye'],
  ['yemama', 'mamaye', 'yemaye', 'woowo'],
];
console.log(solution(data[1]));
