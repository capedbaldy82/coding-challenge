let tree = "";

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j < 5 - i; j++) {
    star += " ";
  }

  for (let k = 0; k < i * 2 + 1; k++) {
    star += "*";
  }
  tree = star;
  console.log(tree);
}

// 기존에 star 초기화를 반복문 밖에 해서 마지막에 star를 초기화시킬
// 필요가 있었으나 반복문 안에서 초기화시킴으로써 코드낭비 제거
