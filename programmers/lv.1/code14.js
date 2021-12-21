function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

let test = {
  1: {
    a: [1, 2, 3, 4],
    b: [-3, -1, 0, 2],
  },
  2: {
    a: [-1, 0, 1],
    b: [1, 0, -1],
  },
};

console.log(solution(test[2].a, test[2].b));
