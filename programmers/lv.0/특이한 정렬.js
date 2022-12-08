function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const distanceA = Math.abs(n - a);
    const distanceB = Math.abs(n - b);
    if (distanceA === distanceB) return b - a;
    else return distanceA - distanceB;
  });
}

const data = [
  [[1, 2, 3, 4, 5, 6], 4],
  [[10000, 20, 36, 47, 40, 6, 10, 7000], 30],
];
console.log(solution(...data[0]));
