function solution(limit, solve) {
  let answer;
  let dy = Array.from({ length: limit + 1 }, () => 0);

  for (let i = 0; i < solve.length; i++) {
    for (let j = solve[i][1]; j < dy.length; j++) {
      dy[j] = Math.max(dy[j], dy[j - solve[i][1]] + solve[i][0]);
    }
  }

  console.log(dy);

  answer = dy[limit];

  return answer;
}

const data = [
  {
    limit: 20,
    solve: [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
  },
];

console.log(solution(data[0].limit, data[0].solve));
