function solution(numbers) {
  var answer = 0;
  let check = Array.from({ length: numbers.length }, () => 0);
  let p = [];
  let temp = [];

  function DFS(L) {
    if (L === numbers.length) {
      if (p.length > 0) {
        let num = p.reduce((a, b) => a + b);
        temp.push(num);
      }
      return;
    } else {
      for (let i = 0; i < numbers.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          p.push(numbers[i]);
          DFS(L + 1);
          p.pop();
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0);

  temp = new Set(temp.map((val) => parseInt(val, 10)));

  for (let x of temp) {
    let count = 0;
    for (let i = 1; i <= x; i++) {
      if (x % i === 0) count++;
    }
    if (count === 2) answer++;
  }

  return answer;
}

const data = ['17', '011'];
console.log(solution(data[0]));
