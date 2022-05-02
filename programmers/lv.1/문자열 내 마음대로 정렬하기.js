function solution(strings, n) {
  return strings.sort().sort((a, b) => {
    return a.charCodeAt(n) - b.charCodeAt(n);
  });
}

const data = ['abce', 'abcd', 'cdx'];
console.log(solution(data, 1));
