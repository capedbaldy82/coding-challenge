function getExponent(n) {
  let answer = 0;

  while (n > 1) {
    n /= 2;
    answer++;
  }

  return answer;
}

function solution(n, a, b) {
  let [small, big] = [Math.min(a, b), Math.max(a, b)];
  let game = getExponent(n);
  let standard = n / 2;

  while (1) {
    let small_low = true;
    let big_up = true;

    if (small > standard) small_low = false;
    if (big <= standard) big_up = false;
    if (small_low && big_up) break;
    else if (!small_low && big_up) {
      standard = standard + 2 ** (game - 2);
    } else {
      standard = standard - 2 ** (game - 2);
    }

    game--;
  }

  return game;
}

const data = [[16, 9, 12]];
console.log(solution(...data[0]));
