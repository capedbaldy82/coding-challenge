// 문자만으로 20190923 출력하기
let data = "aacdddddddddfffffffffgghhh";

console.log(
  `${data.match(/a/g).length}${Number(data.match(/b/g))}${
    data.match(/c/g).length
  }${data.match(/d/g).length}${Number(data.match(/e/g))}${
    data.match(/f/g).length
  }${data.match(/g/g).length}${data.match(/h/g).length}`
);

// 맷돌 손잡이가 없군....ㅋ
