function math(e) {
  let count = [0, 0];
  e = e.split("");
  for (let i = 0; i < e.length; i++) {
    if (e[i] === "(") {
      count[0] += 1;
    }
    if (e[i] === "(") {
      count[0] -= 1;
    }
    if (e[i] === "{") {
      count[1] += 1;
    }

    if (e[i] === "}") {
      count[1] -= 1;
    }
  }

  for (let i = 0; i < count.length; i++) {
    if (count[i] !== 0) {
      return false;
    }
  }

  return true;
}

let order = 1;

while (order) {
  if (order == "1") {
    const ex = "5 + 7){ * (3 * 5)";
    console.log(math(ex));
    order = 0;
  } else {
    break;
  }
}
