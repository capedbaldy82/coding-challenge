function solution(num) {
  if (num === 0) return;
  else {
    solution(num - 1);
    console.log(num);
  }

  // function DFS(level) {
  //   if (level === 0) return;
  //   else {
  //     DFS(level - 1);
  //     console.log(level);
  //   }
  // }

  // DFS(num);
}

const data = 3;
solution(data);

// 함수가 실행 되면 매개 변수, 지역 변수, 복귀 주소가 묶여 스택에 쌓인다.
