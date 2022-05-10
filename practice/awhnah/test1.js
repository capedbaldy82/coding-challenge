function solution(A, S) {
  var answer = A.length + 1;
  let dy = [];
  let total = 0;
  let count = 0;

  // 기준 값이 되는 최소 길이 및 최대 합 구하기
  for (let i = 0; i < A.length; i++) {
    total += A[i];
    count++;
    if (total >= S && answer > count) {
      answer = count;
      dy[0] = total;
      break;
    }
  }

  if (answer === A.length + 1) return 0;

  // 기준 값으로 최소의 반복문 실행
  for (let i = 1; i < A.length; i++) {
    total = dy[i - 1] - A[i - 1] + A[i - 1 + answer];
    dy[i] = total;
    if (dy[i - 1] - A[i - 1] >= S) {
      total = dy[i - 1] - A[i - 1];
      dy[i] = total;
      answer = answer - 1;
      for (let j = i - 1 + answer; j > i; j--) {
        total = total - A[j];
        if (total >= S) {
          dy[i] = total;
          answer = answer - 1;
        } else {
          break;
        }
      }
    }
  }

  console.log(dy);

  if (answer === A.length + 1) answer = 0;

  return answer;
}

const data = [
  {
    A: [1, 10, 2, 9, 3, 8, 4, 7, 5, 6],
    S: 20,
  },
  {
    A: [1, 1, 23, 3, 2, 1, 1, 1, 1, 0],
    S: 20,
  },
];
console.log(solution(data[0].A, data[0].S));
