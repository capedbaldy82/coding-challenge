function solution(arr, n) {
  let answer = [];
  let p = Array.from({ length: n }, () => 0);

  function DFS(L, start) {
    if (L === n) {
      answer.push(p.join(''));
    } else {
      for (let i = start; i < arr.length; i++) {
        p[L] = arr[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

const data = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ'];
console.log(solution(data, 3));
