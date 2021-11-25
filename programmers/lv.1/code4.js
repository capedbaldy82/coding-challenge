function solution(new_id) {
  var answer = "";
  let temp_answer = "";
  let flag = 1;

  // 1단계: 대문자 -> 소문자
  answer = new_id.toLowerCase();
  console.log("1단계: ", answer);

  // 2단계: 알파벳 소문자, 숫자, -, _, . 을 제외한 문자 제거
  var pattern = /[a-z0-9_\-.]/g;
  answer = answer.match(pattern);
  console.log("2단계: ", answer);

  // 3단계: .이 연속된 경우 제거
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] == "." && flag == 1) {
      temp_answer += answer[i];
      flag = 0;
    } else if (answer[i] == "." && flag == 0) {
      flag = 0;
    } else {
      temp_answer += answer[i];
      flag = 1;
    }
  }
  console.log("3단계: ", temp_answer);

  // 4단계: 처음과 마지막 . 제거
  if (temp_answer[0] == ".") {
    temp_answer = temp_answer.substr(1);
  }
  if (temp_answer[temp_answer.length - 1] == ".") {
    temp_answer = temp_answer.substr(0, temp_answer.length - 1);
  }
  console.log("4단계: ", temp_answer);
  // 5단계: 아이디가 빈 문자열일 경우 a 추가
  if (temp_answer.length == 0) {
    temp_answer += "a";
  }
  console.log("5단계: ", temp_answer);
  // 6단계: 아이디의 길이가 16자 이상일 경우, 처음 15자를 제외한 나머지 문자 제거
  //       만약, 마지막 문자가 . 일 경우 . 제거
  if (temp_answer.length > 15) {
    temp_answer = temp_answer.substr(0, 15);
  }
  if (temp_answer[temp_answer.length - 1] == ".") {
    temp_answer = temp_answer.substr(0, temp_answer.length - 1);
  }
  console.log("6단계: ", temp_answer);
  // 7단계: 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될때까지 반복해서 추가
  answer = temp_answer;
  if (temp_answer.length < 3) {
    for (i = 0; i < 3 - temp_answer.length; i++) {
      answer += temp_answer[temp_answer.length - 1];
    }
  }
  console.log("7단계: ", answer);

  return answer;
}

const new_id = "...!@BaT#*..y.abcdefghijklm";
const answer = solution(new_id);
console.log(answer);

// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
