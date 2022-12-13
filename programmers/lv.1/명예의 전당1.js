function solution(k, score) {
  var answer = [];
  let HOF = [];

  for (let i = 0; i < score.length; i++) {
    HOF.push(score[i]);

    if (HOF.length > k) {
      HOF.splice(HOF.indexOf(Math.min(...HOF)), 1);
    }

    answer.push(Math.min(...HOF));
  }

  return answer;
}

const data = [
  [3, [10, 100, 20, 150, 1, 100, 200]],
  [4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]],
];
console.log(solution(...data[0]));
