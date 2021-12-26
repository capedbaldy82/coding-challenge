let data = "1 2 3 4 5".split(" ").map(Number);
let data2 = "1 4 2 6 3".split(" ").map(Number);

function solution(numbers) {
  let customerNumbers = new Array(...numbers);
  let correctNumbers = numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (customerNumbers[i] !== correctNumbers[i]) {
      return "NO";
    }
  }

  return "YES";
}

console.log(solution(data));
