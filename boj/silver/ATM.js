const txt = '5\n3 1 3 4 2';

function solution(men) {
  let answer = 0;
  let total = 0;

  men = men.map((a) => parseInt(a, 10));
  men.sort((a, b) => a - b);

  for (let time of men) {
    total += time;
    answer += total;
  }

  return answer;
}

const arr = [3, 1, 4, 3, 2];
const cutArr = txt.split('\n')[1].split(' ');

console.log(solution(cutArr));
