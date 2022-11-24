function solution(my_string) {
  var answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    const num = parseInt(my_string[i]);
    if (!Number.isNaN(num)) answer += num;
  }

  return answer;
}

const data = ['aAb1B2cC34oOp', '1a2b3c4d123'];
console.log(solution(data[0]));
