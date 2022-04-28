function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 0; i < k; i++) {
      if (i === k - 1) {
        queue.shift();
      } else {
        queue.push(queue.shift());
      }
    }
  }

  answer = queue.shift();

  return answer;
}

console.log(solution(8, 3));
