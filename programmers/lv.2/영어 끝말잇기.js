function solution(n, words) {
  let [who, cycle] = [0, 0];
  let stack = [words[0]];

  for (let i = 1; i < words.length; i++) {
    const already = stack.includes(words[i]);
    const diffrent_char = words[i - 1][words[i - 1].length - 1] !== words[i][0];
    if (already || diffrent_char) {
      who = (i % n) + 1;
      cycle = Math.floor(i / n) + 1;
      break;
    }
    stack.push(words[i]);
  }

  return [who, cycle];
}

const data = [
  [3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']],
  [
    5,
    [
      'hello',
      'observe',
      'effect',
      'take',
      'either',
      'recognize',
      'encourage',
      'ensure',
      'establish',
      'hang',
      'gather',
      'refer',
      'reference',
      'estimate',
      'executive',
    ],
  ],
  [2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']],
];
console.log(solution(...data[0]));
