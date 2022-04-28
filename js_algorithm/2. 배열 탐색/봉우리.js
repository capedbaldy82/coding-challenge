function solution(arr) {
  let answer = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < arr.length &&
          ny >= 0 &&
          ny < arr.length &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));

function MySolution(arr) {
  let answer = 0;
  let map = [];
  let flag = true;

  for (let i = 0; i < arr.length + 2; i++) {
    map.push(Array.from({ length: arr.length + 2 }, () => 0));
  }

  for (let i = 1; i < map.length - 1; i++) {
    for (let j = 1; j < map.length - 1; j++) {
      map[i][j] = arr[i - 1][j - 1];
    }
  }

  for (let i = 1; i < arr.length + 1; i++) {
    for (let j = 1; j < arr.length + 1; j++) {
      flag = true;
      if (map[i - 1][j] > map[i][j]) {
        flag = false;
      } else if (map[i][j - 1] > map[i][j]) {
        flag = false;
      } else if (map[i][j + 1] > map[i][j]) {
        flag = false;
      } else if (map[i + 1][j] > map[i][j]) {
        flag = false;
      }

      if (flag) {
        answer++;
      }
    }
  }

  return answer;
}
