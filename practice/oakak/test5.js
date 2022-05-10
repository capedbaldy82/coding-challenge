function ShiftRow(rc, many) {
  for (let k = 0; k < many; k++) {
    for (let i = 0; i < rc.length - 1; i++) {
      [rc[i + 1], rc[0]] = [rc[0], rc[i + 1]];
    }
  }

  // rc.unshift(rc.pop());

  return rc;
}

function Rotate(rc, many) {
  let w = rc[0].length;
  let h = rc.length;
  let n = w * h - (w - 2) * (h - 2);

  if (n / 2 > many) {
    for (let k = 0; k < many; k++) {
      for (let i = 1; i < w; i++) {
        [rc[0][0], rc[0][i]] = [rc[0][i], rc[0][0]];
      }
      for (let i = 1; i < h - 1; i++) {
        [rc[0][0], rc[i][w - 1]] = [rc[i][w - 1], rc[0][0]];
      }
      for (let i = 1; i <= w; i++) {
        [rc[0][0], rc[h - 1][w - i]] = [rc[h - 1][w - i], rc[0][0]];
      }
      for (let i = 1; i < h - 1; i++) {
        [rc[0][0], rc[h - i - 1][0]] = [rc[h - i - 1][0], rc[0][0]];
      }
    }
  } else {
    for (let k = 0; k < n - many; k++) {
      for (let i = 1; i < h - 1; i++) {
        [rc[0][0], rc[i][0]] = [rc[i][0], rc[0][0]];
      }
      for (let i = 1; i <= w; i++) {
        [rc[0][0], rc[h - 1][i - 1]] = [rc[h - 1][i - 1], rc[0][0]];
      }
      for (let i = 1; i < h - 1; i++) {
        [rc[0][0], rc[h - 1 - i][w - 1]] = [rc[h - 1 - i][w - 1], rc[0][0]];
      }
      for (let i = 1; i < w; i++) {
        [rc[0][0], rc[0][w - i]] = [rc[0][w - i], rc[0][0]];
      }
    }
  }

  return rc;
}

function solution(rc, operations) {
  var answer = rc;
  let h = rc.length;
  let n = rc[0].length * rc.length - (rc[0].length - 2) * (rc.length - 2);

  let shft = 1;
  let rot = 1;

  for (let i = 1; i < operations.length; i++) {
    if (operations[i] === 'ShiftRow') {
      if (operations[i] === operations[i - 1]) {
        shft++;
        if (shft === h) {
          for (let j = i; j > i - h; j--) {
            operations[j] = '';
          }
        }
      } else {
        shft = 1;
        rot = 1;
      }
    } else {
      if (operations[i] === operations[i - 1]) {
        rot++;
        if (rot === n) {
          for (let j = i; j > i - n; j--) {
            operations[j] = '';
          }
        }
      } else {
        shft = 1;
        rot = 1;
      }
    }
  }

  operations = operations.filter((val) => val !== '');

  console.log(operations);

  let dy = [];
  let count = 1;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === operations[i + 1]) {
      count++;
    } else {
      if (operations[i] === 'ShiftRow') {
        dy.push(`S${count}`);
      } else {
        dy.push(`R${count}`);
      }
      count = 1;
    }
  }

  console.log(dy);

  for (let x of dy) {
    if (x[0] === 'S') {
      answer = ShiftRow(answer, parseInt(x[1], 10));
    } else if (x[0] === 'R') {
      answer = Rotate(answer, parseInt(x[1], 10));
    }
  }

  return answer;
}

const data = [
  {
    rc: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    operations: ['Rotate', 'ShiftRow'],
  },
  {
    rc: [
      [8, 6, 3],
      [3, 3, 7],
      [8, 4, 9],
    ],
    operations: ['Rotate', 'ShiftRow', 'Rotate', 'ShiftRow', 'ShiftRow', 'ShiftRow', 'Rotate', 'ShiftRow'],
  },
  {
    rc: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    operations: ['ShiftRow', 'Rotate', 'ShiftRow', 'Rotate'],
  },
  {
    rc: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    operations: ['ShiftRow', 'Rotate'],
  },
  {
    rc: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    operations: [
      'Rotate',
      // 'ShiftRow',
      // 'ShiftRow',
      // 'ShiftRow',
      // 'ShiftRow',
      'Rotate',
      'Rotate',
      'Rotate',
      'Rotate',
      'Rotate',
      'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'Rotate',
      // 'ShiftRow',
      // 'ShiftRow',
      // 'ShiftRow',
      // 'Rotate',
    ],
  },
];
console.log(solution(data[1].rc, data[1].operations));
