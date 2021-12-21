function solution(nums) {
  var answer = 0;
  let arr = [];

  nums.forEach((e) => {
    if (arr.indexOf(e) === -1) {
      arr.push(e);
    }
  });

  if (nums.length / 2 < arr.length) {
    answer = nums.length / 2;
  } else if (nums.length / 2 > arr.length) {
    answer = arr.length;
  } else {
    answer = arr.length;
  }

  return answer;
}

let test = {
  1: [3, 1, 2, 3],
  2: [3, 3, 3, 2, 2, 4],
  3: [3, 3, 3, 2, 2, 2],
};

console.log(solution(test[3]));

// 2개 선택가능, 중복 제거 시 총 3개, 정답 2개
// 3개 선택가능, 중복 제거 시 총 3개, 정답 3개
// 3개 선택가능, 중복 제거 시 총 2개, 정답 2개
