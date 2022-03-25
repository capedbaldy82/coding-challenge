function solution(s) {
  let answer;
  let candidate = new Map();

  for (let x of s) {
    if (candidate.has(x)) candidate.set(x, candidate.get(x) + 1);
    else candidate.set(x, 1);
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of candidate) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

// let strLength = new Set(s.split(""));
// let candidateArr = [...strLength].sort();
// let countArr = Array.from({ length: strLength.size }, () => 0);

// for (let x of s) {
//   countArr[candidateArr.indexOf(x)]++;
// }

// answer = candidateArr[countArr.indexOf(Math.max(...countArr))];
