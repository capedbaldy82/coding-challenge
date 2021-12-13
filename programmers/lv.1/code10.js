function solution(N, stages) {
  var answer = [];
  let arr = [];
  let count = 0;

  for (let i = 1; i <= N; i++) {
    stages.forEach((e) => {
      if (e === i) {
        count++;
      }
    });
    arr.push([i, count / stages.length]);
    count = 0;
    stages = stages.filter((e) => e !== i);
  }
  arr.sort((a, b) => b[1] - a[1]);
  arr.forEach((e) => answer.push(e[0]));

  return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const answer = solution(N, stages);
console.log(answer);
