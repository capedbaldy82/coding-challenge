function getLCM(a, b) {
  let lcm = 1;

  while (1) {
    if (lcm % a === 0 && lcm % b === 0) break;
    lcm++;
  }

  return lcm;
}

function solution(n) {
  return getLCM(6, n);
}

const data = [6, 10, 4, 13];
console.log(solution(data[0]));
