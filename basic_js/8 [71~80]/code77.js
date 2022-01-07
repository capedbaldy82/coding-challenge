const solution = (string1, string2) => {
  let same;
  let answer = 0;
  let char1 = [];
  let char2 = [];

  for (let i = 0; i < string1.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      char1.push(string1.slice(j, string1.length - i + j));
    }
  }

  for (let i = 0; i < string2.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      char2.push(string2.slice(j, string2.length - i + j));
    }
  }
  // 내부 for문 조건식에 i+1을 안해줄 경우 외부 for문의 i=0일 경우를 무시
  // 따라서 조건식에 i+1 처리를 해준다.
  // string2.length기본값이며 자르는 단어 길이가 i에의해 변한다.
  // 이 때 +j를 해줌으로써 옆으로 한 칸씩 옮기며 다르는 단어의 기준을 설정해준다.

  same = difference = char1.filter((char) => char2.includes(char));
  // 배열들의 교집합을 구해준다.

  same.sort((a, b) => b.length - a.length);
  // 교집합을 문자열의 길이를 기준으로 내림차순으로 정렬

  answer = same[0].length;
  // 가장 긴 길이 문자열인 첫 번째 문자열의 길이를 할당

  return answer;
};

let string1 = "THISISSTRINGS";
let string2 = "THISIS";

console.log(solution(string1, string2));
