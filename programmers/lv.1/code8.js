function solution(nums) {
  var answer = 0;
  let numbers = [];
  let isprime = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        numbers.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  console.log(numbers);

  numbers.forEach((e) => {
    for (let i = 2; i < e; i++) {
      if (e % i == 0) {
        isprime = false;
      }
    }
    answer += isprime ? 1 : 0;
    isprime = true;
  });

  return answer;
}

nums = [1, 2, 7, 6, 4];
let answer = solution(nums);
console.log(answer);
