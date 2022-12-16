function solution(s) {
  var answer = [];

  s = s.split(' ');

  for (let word of s) {
    if (word !== '') {
      let temp = word.toLowerCase().split('');
      temp.unshift(temp.shift().toUpperCase());
      answer.push(temp.join(''));
    } else {
      answer.push(word);
    }
  }

  return answer.join(' ');
}

const data = ['3people unFollowed me', 'for the last week', 'i want      a   banana'];
console.log(solution(data[2]));
