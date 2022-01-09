function combination(chars) {
  let combi = [];

  const f = (prefix, chars) => {
    for (let i = 0; i < chars.length; i++) {
      combi.push(prefix + chars[i]);

      f(prefix + chars[i], chars.slice(i + 1));
    }
  };

  f("", chars);

  //조합의 수에 맞는 것만 추출!
  const result = combi.filter((x) => x.length === n);
  console.log(result);

  return result.length;
}

const arr = prompt("입력해주세요").split(",");
const n = parseInt(prompt("조합의 수를 입력해주세요"), 10);

console.log(combination(arr));

// const solution = (conso, leng) => {
//   let cases = 1;
//   let answer = [];
//   conso = conso.split("");

//   // 경우의 수 구하기
//   for (let i = 0; i < leng; i++) {
//     cases = cases * ((4 - i) / (i + 1));
//   }

//   const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     if (selectNumber === 1) return arr.map((el) => [el]);
//     // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

//     arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1);
//       // 해당하는 fixed를 제외한 나머지 뒤
//       const combinations = getCombinations(rest, selectNumber - 1);
//       // 나머지에 대해서 조합을 구한다.
//       const attached = combinations.map((el) => [fixed, ...el]);
//       //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
//       results.push(...attached);
//       // 배열 spread syntax 로 모두다 push
//     });

//     return results; // 결과 담긴 results return
//   };

//   answer = getCombinations(conso, leng);

//   console.log(answer);
//   console.log(cases);
// };

// let data = {
//   consonants: "ㄱㄴㄷㄹ",
//   leng: 3,
// };

// console.log(solution(data.consonants, data.leng));
