function solution(s) {
  var answer = s.length;

  for (let k = 1; k <= parseInt(s.length / 2, 10); k++) {
    let string = '';
    let count = 1;
    let char = s.substr(0, k);

    for (let i = k; i <= s.length; i += k) {
      let nextChar = s.substr(i, k);

      if (char === nextChar) {
        count++;
      } else {
        if (count === 1) string += char;
        else string += count + char;

        char = nextChar;
        count = 1;
      }
    }
    string += (count === 1 ? '' : count) + char;

    if (answer > string.length) {
      answer = string.length;
    }
    // console.log(string, string.length, k);
  }

  return answer;
}

const data = ['aabbaccc', 'ababcdcdababcdcd', 'abcabcdede', 'abcabcabcabcdededededede', 'xababcdcdababcdcd', 'abcaabca'];

const exception = ['aaaaaaz', 'a', '', 'aaaaaaaaaaaaabbzbz', 'abcabcabcdabcfabcabcabczabcabcdddabc'];

const exception2 = [''];
// abcabcabcdabcfabcabcabczabcabcdddabc; => 36
// 3abcdabcf3abcz2abcdddabc => 24

console.log('answer: ' + solution(data[0]));

// 13a2bzbz
// 6aaab2bz

// 1. s.length /2 위 단위로 압축해본다.
// 2. s.length /2 -1 씩 압축해본다.
// 3. 기존 길이보다 짧으면 max에 넣는다.
// 4. 1이되면 멈춘다.
