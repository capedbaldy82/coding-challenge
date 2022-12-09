function solution(common) {
  const [arithmetic, geometric] = [common[1] - common[0], common[1] / common[0]];
  let isGeo = false;
  let differ = 0;

  if (arithmetic === common[2] - common[1]) {
    differ = arithmetic;
  } else {
    isGeo = true;
    differ = geometric;
  }

  return isGeo ? common[common.length - 1] * differ : common[common.length - 1] + differ;
}

const data = [
  [1, 2, 3, 4],
  [2, 4, 8],
];
for (let i = 0; i < data.length; i++) {
  console.log(solution(data[i]));
}
