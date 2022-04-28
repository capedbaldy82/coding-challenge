function solution(a, b, c) {
  let answer = "YES";
  let arr = [a, b, c].sort((x, y) => x - y);

  if (arr[2] >= arr[0] + arr[1]) {
    answer = "NO";
  }

  return answer;
}

console.log(solution(13, 33, 17));
