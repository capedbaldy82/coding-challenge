function solution(n) {
  let add = n;
  let final = 0;
  let count = 0;

  const DFS = (x) => {
    if (x === final) return;
    else {
      count = 0;
      for (let i = x - add + 1; i <= x; i++) {
        if (i % 3 === 0) count++;
        else {
          if ((i + '').includes('3')) count++;
        }
      }
      final = x;
      add = count;
      DFS(x + count);
    }
  };

  DFS(n);

  return final;
}

const data = [10, 15, 40];
console.log(solution(data[2]));
