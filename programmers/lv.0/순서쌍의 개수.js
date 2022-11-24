function solution(n) {
  //   let answer = 1;
  //   let count = 0;
  //   let i = 2;
  //   let flag = false;

  //   while (n > 1) {
  //     if (n % i === 0) {
  //       n = n / i;
  //       count++;
  //       flag = true;
  //     } else {
  //       i++;
  //       if (flag) {
  //         answer = answer * (count + 1);
  //         count = 0;
  //         flag = false;
  //       }
  //     }
  //   }

  //   answer *= count + 1;

  //   return answer;

  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}

let start = new Date();

const data = [20, 100];
console.log(solution(10000000));

let end = new Date();

console.log(`tiem: ${end - start}`);
