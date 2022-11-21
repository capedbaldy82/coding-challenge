function solution(s1, s2) {
  return s2.filter((a) => s1.includes(a)).length;
  // return s2.reduce((a, b) => (s1.indexOf(b) !== -1 ? a + 1 : a + 0), 0);
}

const data = [
  [
    ['a', 'b', 'c'],
    ['com', 'b', 'd', 'p', 'c'],
  ],
  [
    ['n', 'omg'],
    ['m', 'dot'],
  ],
];

let start = new Date();

console.log(solution(...data[0]));

let end = new Date();

console.log(`time: ${end - start}`);
