function solution(n) {
  let answer = [];
  let part = Array.from({ length: n + 1 }, () => 0);

  function DFS(num) {
    if (num > n) {
      let temp = '';
      for (let i = 1; i <= n; i++) {
        if (part[i] === 1) temp += i + ' ';
      }
      if (temp.length > 0) answer.push(temp.trim());
      return;
    } else {
      part[num] = 1;
      DFS(num + 1);
      part[num] = 0;
      DFS(num + 1);
    }
  }

  DFS(1);

  return answer;
}

const data = 3;
console.log(solution(data));
