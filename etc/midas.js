function solution(H) {
  var answer = [];
  let countArr = [...new Set([...H])].map((ele) => {
    return 0;
  });

  const squareSet = new Set();

  const coordinateArr = H.map((height, idx) => {
    return [
      [idx, 0],
      [idx + 1, height],
    ];
  });

  H.forEach((ele) => {
    countArr[ele - 1]++;
  });

  H.forEach((ele, idx) => {
    squareSet.add(coordinateArr[idx]);
  });

  console.log(coordinateArr);

  const checkLeft = (height, coordi, Arr) => {
    let count = 0;
    let temp;

    for (let i = 0; i < coordi[0][0]; i++) {
      if (H[coordi[0][0] - 1] >= height) {
        count++;
        if (
          !squareSet.has([...coordinateArr[coordi[0][0] - i - 1], ...coordi])
        ) {
          squareSet.add([...coordinateArr[coordi[0][0] - i - 1], ...coordi]);
        }
      }
    }
    return count;
  };

  const checkRight = (height, coordi) => {
    let count = 0;

    for (let i = 0; i < H.length - coordi[0][0] - 1; i++) {
      if (H[coordi[0][0] + 1] >= height) {
        count++;
        if (
          !squareSet.has([...coordi, ...coordinateArr[coordi[0][0] + i + 1]])
        ) {
          squareSet.add([...coordi, ...coordinateArr[coordi[0][0] + i + 1]]);
        }
      }
    }
    return count;
  };

  console.log(countArr);
  console.log(squareSet);

  H.forEach((height, idx) => {
    countArr[coordinateArr[idx][1][1] - 1] += checkLeft(
      height,
      coordinateArr[idx],
      coordinateArr
    );
  });

  console.log(countArr);
  console.log(squareSet);

  H.forEach((height, idx) => {
    countArr[coordinateArr[idx][1][1] - 1] += checkRight(
      height,
      coordinateArr[idx],
      coordinateArr
    );
  });

  console.log(countArr);
  console.log(squareSet);

  return answer;
}

const testCase = [3, 2, 1, 1, 3];

console.log(solution(testCase));
