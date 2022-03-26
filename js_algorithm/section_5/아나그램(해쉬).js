function solution(str1, str2) {
  let answer = "YES";
  let strMap1 = new Map();

  for (let x of str1) {
    if (strMap1.has(x)) strMap1.set(x, strMap1.get(x) + 1);
    else strMap1.set(x, 1);
  }

  for (let x of str2) {
    if (strMap1.get(x)) {
      strMap1.set(x, strMap1.get(x) - 1);
    } else {
      return "NO";
    }
  }

  console.log(strMap1);

  return answer;
}

let a = "abaCC";
let b = "Caaab";
console.log(solution(a, b));

// if (str1.split("").sort().join("") !== str2.split("").sort().join("")) {
//   answer = "NO";
// }
