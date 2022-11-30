function solution(n) {
  var answer = [];
  let temp = 2;

  while (n > 1) {
    if (n % temp === 0) {
      if (answer.indexOf(temp) === -1) {
        answer.push(temp);
      }
      n = n / temp;
    } else {
      temp++;
    }
  }

  return answer;
}

const data = [12, 17, 420];
for (let i = 0; i < data.length; i++) {
  console.log(solution(data[i]));
}
