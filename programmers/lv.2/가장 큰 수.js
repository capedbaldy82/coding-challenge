function solution(numbers) {
  var answer = '';

  numbers.sort((a, b) => {
    const sumA = parseInt(a + '' + (b + ''));
    const sumB = parseInt(b + '' + (a + ''));
    return sumB - sumA;
  });

  answer = numbers.join('');

  if (answer[0] === '0') return '0';

  return answer;
}

const data = [{ numbers: [6, 10, 2] }, { numbers: [3, 30, 34, 5, 9, 0] }, { numbers: [9, 998] }];

console.log(solution(data[1].numbers));

// 9534323330
