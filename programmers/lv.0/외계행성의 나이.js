function solution(age) {
  return (age + '')
    .split('')
    .reduce((acc, cul) => acc + String.fromCharCode(cul.charCodeAt(0) + 49), '');
}

const data = [23, 51, 100];
console.log(solution(data[0]));
