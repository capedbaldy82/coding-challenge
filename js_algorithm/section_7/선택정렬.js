function solution(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length; i++) {
    let temp = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[temp] > arr[j]) {
        temp = j;
      }
    }
    [arr[temp], arr[i]] = [arr[i], arr[temp]];
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
