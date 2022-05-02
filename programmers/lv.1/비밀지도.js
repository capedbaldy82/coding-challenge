function solution(n, arr1, arr2) {
  var answer = [];
  let num1, num2, s;

  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    s = '';

    for (let j = 0; j < n; j++) {
      s = (num1 % 2) + (num2 % 2) ? '#' + s : ' ' + s;
      num1 = parseInt(num1 / 2, 10);
      num2 = parseInt(num2 / 2, 10);
    }
    answer.push(s);
  }

  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
