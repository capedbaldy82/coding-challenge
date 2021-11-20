function solution(nums) {
  nums.splice(3, 1);
  nums.splice(3, 1);

  answer = nums;

  return answer;
}

let nums = [100, 200, 300, 400, 500];
console.log(solution(nums));

// Array.splice(배열의 인덱스, 0이면 추가 1이면 제거, 추가일 경우 추가할 값)

// ex)
// Array.splice(2,0,"13");
// Array.splice(1,1);
