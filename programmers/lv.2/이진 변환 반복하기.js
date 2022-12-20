function solution(s) {
  let [convert, zero] = [0, 0];

  while (s !== '1') {
    let beforeLength = s.length;
    s = s
      .split('')
      .filter((num) => +num)
      .join('');

    let currentLength = s.length;

    zero += beforeLength - currentLength;

    s = currentLength.toString(2);
    convert++;
  }

  return [convert, zero];
}

const data = ['110010101001', '01110', '1111111', '0111010'];
console.log(solution(data[0]));
