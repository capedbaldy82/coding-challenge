function solution(ingredient) {
  ingredient = ingredient.join('');
  var answer = 0;
  let pointer = 0;
  let [front, back] = ['', ''];
  let hamburger = '1231';

  while (1) {
    const whereIsHamburger = ingredient.indexOf(hamburger, pointer);
    if (whereIsHamburger === -1) break;
    else {
      answer++;
      front = ingredient.substr(0, whereIsHamburger);
      back = ingredient.substr(whereIsHamburger + 4);
      ingredient = front + back;
      if (whereIsHamburger > 3) pointer = whereIsHamburger - 3;
    }
  }

  return answer;
}

const data = [
  [2, 1, 1, 2, 3, 1, 2, 3, 1],
  [1, 3, 2, 1, 2, 1, 3, 1, 2],
];
console.log(solution(data[0]));
