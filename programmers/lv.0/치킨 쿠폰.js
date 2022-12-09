function solution(chicken) {
  var answer = 0;

  while (Math.floor(chicken / 10)) {
    answer += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }

  return answer;
}

const data = [100, 1081, 161];
console.log(solution(data[2]));
