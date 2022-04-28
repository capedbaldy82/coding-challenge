// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  let tempArr = S.split("");
  let Queue = [];
  let sortedQueue = [];

  for (let i = 0; i < tempArr.length; i++) {
    Queue.push(tempArr[i]);
    sortedQueue.push(tempArr[i]);
    sortedQueue.sort();
    if (Queue !== sortedQueue) {
      let temp = [];
      temp = Queue;
      sortedQueue.pop();
      Queue = Queue.splice(i - 1, 1);

      if (Queue === sortedQueue) {
      } else {
        sortedQueue.push(tempArr[i]);
        Queue.pop();
      }
    }
  }

  answer = tempArr.length - Queue.length;

  return answer;
}

console.log(solution("adchiek"));
