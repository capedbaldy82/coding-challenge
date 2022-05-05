function solution(clothes) {
  var answer = 1;
  let sort = {};

  for (let x of clothes) {
    if (sort.hasOwnProperty(x[1])) {
      sort[x[1]].push(x[0]);
    } else {
      sort[x[1]] = [x[0]];
    }
  }

  function DFS(n, r) {
    if (r === n || r === 0) return 1;
    else return DFS(n - 1, r - 1) + DFS(n - 1, r);
  }

  for (let x in sort) {
    answer *= DFS(sort[x].length + 1, 1);
  }

  return answer - 1;
}
// 1. 헤드, 얼굴, 상의, 하의, 겉옷 별로 분류한다.
// 2. 헤드, x, x, x, x일 때 추출
// 3. 헤드, 얼굴, x, x ,x 일 때 추출

const data = [
  [
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ],
  [
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ],
];
console.log(solution(data[1]));
