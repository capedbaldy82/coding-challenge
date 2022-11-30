function solution(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}

const data = ['100aAb1B2cC34oOp', '1a2b3c4d123Z', 'bcvasdf1'];

console.log(solution(data[1]));
