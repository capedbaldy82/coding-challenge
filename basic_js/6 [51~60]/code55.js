// 하노이 탑은 최소 2의 n제곱 -1 의 최소 이동 횟수를 갖는다.(n = 원판의 갯수)
function hanoi(num, start = "A", temp = "B", end = "C") {
  return 2 ** num - 1;
}

console.log(hanoi(3));
