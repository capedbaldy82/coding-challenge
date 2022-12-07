function solution(A, B) {
  //   var answer = -1;

  //   A = A.split('');

  //   for (let i = 0; i < A.length; i++) {
  //     if (A.join('') === B) {
  //       answer = i;
  //       break;
  //     }
  //     A.unshift(A.pop());
  //   }

  //   return answer;

  return (B + B).indexOf(A);
}

const data = [
  ['hello', 'lohel'],
  ['apple', 'elppa'],
];
console.log(solution(...data[0]));
