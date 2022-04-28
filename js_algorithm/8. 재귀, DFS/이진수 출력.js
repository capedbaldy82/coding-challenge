function solution(num) {
  const answer = [];

  function DFS(level) {
    if (level === 0) return;
    else {
      DFS(parseInt(level / 2, 10));
      answer.push(level % 2);
    }
  }

  DFS(num);

  return answer.join('');
}

const data = 11;
console.log(solution(data));

// 11을 2로 나눈다 => 몫:5, 나머지:1
// 5를 2로 나눈다 => 몫:2, 나머지: 1
// 2를 2로 나눈다 => 몫:1, 나머지: 0
// 1을 2로 나눈다 => 몫:0, 나머지: 1
