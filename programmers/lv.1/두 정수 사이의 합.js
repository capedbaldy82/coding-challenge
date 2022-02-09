function solution(a, b) {
  var answer = 0;

  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }

  for (let i = a; i <= b; i++) {
    answer += i;
  }

  return answer;
  // return (a+b)*(Math.abs(b-a)+1)/2;
}

const sample = [
  {
    a: 3,
    b: 5,
  },
  {
    a: 3,
    b: 3,
  },
  {
    a: 5,
    b: 3,
  },
];

console.log(solution(sample[2].a, sample[2].b));
