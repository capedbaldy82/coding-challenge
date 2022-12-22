function solution(people, limit) {
  var answer = 0;
  let total = 0;

  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;

  while (right >= left) {
    total += people[right];
    while (total + people[left] <= limit && left !== right) {
      total += people[left];
      left += 1;
    }

    answer += 1;
    right -= 1;
    total = 0;
  }

  return answer;
}

const data = [
  [[70, 50, 80, 50], 100],
  [[70, 80, 50], 100],
  [[40, 50, 60, 70, 80, 90, 100, 110, 240, 240], 240],
  [[50, 50, 10, 10, 80], 100],
];
console.log(solution(...data[3]));
