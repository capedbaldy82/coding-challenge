function solution(participant, completion) {
  var answer = "";

  for (let j = 0; j < completion.length; j++) {
    let removeIndex = participant.indexOf(completion[j]);
    if (removeIndex > -1) {
      participant.splice(removeIndex, 1);
    } else {
      return participant[removeIndex];
    }

    answer = participant + "";
  }

  return answer;
}

const participant = ["mislav", "stanko", "ana", "mislav"];
const completion = ["stanko", "ana", "mislav"];
const answer = solution(participant, completion);
console.log(answer);

// function solution(participant, completion) {
//     var answer = "";

//     participant.sort();
//     completion.sort();

//     for (let j = 0; j < participant.length; j++) {
//       if (participant[j] !== completion[j]) {
//         return participant[j];
//       }
//     }
//   }
