function solution(order) {
  return (order + '').split('').reduce((acc, cul) => {
    if (cul === '3' || cul === '6' || cul === '9') return acc + 1;
    else return acc;
  }, 0);
}

const data = [3, 29423];
console.log(solution(data[1]));
