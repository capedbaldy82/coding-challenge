function math(e) {
  let data = e.split("");
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "(") {
      count += 1;
    } else if (data[i] === ")") {
      count -= 1;
    }

    if (count) {
      return true;
    } else {
      return false;
    }
  }

  console.log(data);
}

let order = 1;

while (order) {
  // let order = prompt('데이터 입력(1), 프로그램 종료(2)');
  if (order === 1) {
    const ex = "5 + 7) * (3 * 5)";
    console.log(math(ex));
    order = 0;
  } else {
    break;
  }
}
