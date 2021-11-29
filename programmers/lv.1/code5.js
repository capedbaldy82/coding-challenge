function solution(numbers, hand) {
  let answer = "";
  keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let num = 0;
  let leftPosition = keypad["*"];
  let rightPosition = keypad["#"];
  let distance_left = 0;
  let distance_right = 0;

  for (let i = 0; i < numbers.length; i++) {
    num = keypad[numbers[i]];
    if (num[1] == 0) {
      answer += "L";
      leftPosition = num;
    } else if (num[1] == 2) {
      answer += "R";
      rightPosition = num;
    } else if (num[1] == 1) {
      distance_left =
        Math.abs(num[0] - leftPosition[0]) + Math.abs(num[1] - leftPosition[1]);
      distance_right =
        Math.abs(num[0] - rightPosition[0]) +
        Math.abs(num[1] - rightPosition[1]);

      if (distance_left < distance_right) {
        answer += "L";
        leftPosition = num;
      } else if (distance_left > distance_right) {
        answer += "R";
        rightPosition = num;
      } else if (distance_left == distance_right) {
        if (hand == "left") {
          answer += "L";
          leftPosition = num;
        } else if (hand == "right") {
          answer += "R";
          rightPosition = num;
        }
      }
    }
  }

  return answer;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const answer = solution(numbers, "right");
console.log(answer);
