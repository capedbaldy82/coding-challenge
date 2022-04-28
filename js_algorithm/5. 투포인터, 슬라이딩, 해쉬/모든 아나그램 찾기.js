function compareMap(a, b) {
  if (a.size !== b.size) return false;
  for (let [key, value] of a) {
    if (!b.has(key) || b.get(key) !== value) return false;
  }
  return true;
}

function solution(map1, map2) {
  let answer = 0;
  let strHash = new Map();
  let partHash = new Map();

  for (let x of map2) {
    if (partHash.has(x)) partHash.set(x, partHash.get(x) + 1);
    else partHash.set(x, 1);
  }

  let length = map2.length - 1;

  for (let i = 0; i < length; i++) {
    if (strHash.has(map1[i])) strHash.set(map1[i], strHash.get(map1[i]) + 1);
    else strHash.set(map1[i], 1);
  }

  let lt = 0;
  for (let rt = length; rt < map1.length; rt++) {
    if (strHash.has(map1[rt])) strHash.set(map1[rt], strHash.get(map1[rt]) + 1);
    else strHash.set(map1[rt], 1);

    if (compareMap(strHash, partHash)) answer++;
    strHash.set(map1[lt], strHash.get(map1[lt]) - 1);
    if (strHash.get(map1[lt]) === 0) strHash.delete(map1[lt]);
    lt++;
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
let start = new Date().getTime();
console.log(solution(a, b));
let end = new Date().getTime();

console.log(`소요 시간: ${end - start}`);

// map1 = map1.split("");
// map2 = map2.split("").sort().join("");

// let part = map1.slice(0, map2.length);
// for (let i = 0; i < map1.length - 2; i++) {
//   part = map1.slice(i, i + map2.length);
//   if (part.sort().join("") === map2) {
//     answer++;
//   }
// }
