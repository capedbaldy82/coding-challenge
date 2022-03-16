function solution(arr) {
  let answer = "";
  // let sortArr = arr.map((score) => score).sort((a, b) => b - a);

  // arr.forEach((score) => {
  //   answer += sortArr.indexOf(score) + 1 + " ";
  // });

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count++;
      }
    }
    answer += count + " ";
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
