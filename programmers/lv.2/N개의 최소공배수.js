function getLCM(a, b) {
  let result = 1;
  let i = 2;
  while (i <= a || i <= b) {
    if (a % i === 0 && b % i === 0) {
      a /= i;
      b /= i;
      result *= i;
    } else {
      i++;
    }
  }

  return result * a * b;
}

function solution(arr) {
  if (arr.length === 1) return arr[0];
  let answer = getLCM(arr.pop(), arr.pop());

  while (arr.length) {
    const n = arr.pop();

    answer = getLCM(n, answer);
  }

  return answer;
}

const data = [
  [2, 6, 8, 14],
  [1, 2, 3],
];
console.log(solution(data[0]));
