function solution(n) {
  let dx = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    dx.push((dx[i - 1] + dx[i - 2]) % 1234567);
  }

  return dx[n - 1];
}

const data = [4, 3, 57];
console.log(solution(data[2]));
