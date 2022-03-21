function solution(test) {
  let answer = 0;
  let tempArr = [];
  let canMento = [];

  for (let i = 0; i < test[0].length; i++) {
    for (let j = 0; j < test[0].length; j++) {
      if (i !== j) {
        tempArr.push([i + 1, j + 1]);
      }
    }
  }

  tempArr.forEach((val) => {
    let flag = true;
    for (let i = 0; i < test.length; i++) {
      if (test[i].indexOf(val[0]) > test[i].indexOf(val[1])) {
        flag = false;
      }
    }
    if (flag) {
      canMento.push(val);
    }
  });

  console.log(canMento);

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// (3,4) (3,1) (3,2)
// (4,1) (4,2)
// (1,2)
// (4,3) (4,2) (4,1)
// (3,2) (3,1)
// (2,1)
// (3,1) (3,4) (3,2)
// (1,4) (1,2)
// (4,2)
