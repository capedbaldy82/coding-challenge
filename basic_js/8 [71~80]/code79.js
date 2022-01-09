const rotate = (inL, inN) => {
  let index = 0;
  let value = [];
  let originInL = new Array(...inL);
  let temp = 0;
  let tempArr = [];

  for (let i = 0; i < inN; i++) {
    temp = inL[inL.length - 1];
    inL.unshift(temp);
    inL.pop();
  }

  for (let i = 0; i < inL.length; i++) {
    tempArr.push(Math.abs(originInL[i] - inL[i]));
  }

  index = tempArr.indexOf(Math.min(...tempArr));
  value = [
    originInL[tempArr.indexOf(Math.min(...tempArr))],
    inL[tempArr.indexOf(Math.min(...tempArr))],
  ];

  console.log(index);
  console.log(value);
};

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = 3;

rotate(l, n);
