function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let left = Math.max(...songs);
  let right = songs.reduce((a, b) => a + b);

  while (left <= right) {
    let mid = parseInt((left + right) / 2, 10);
    if (count(songs, mid) <= m) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // while (left <= right) {
  //   let mid = parseInt((left + right) / 2, 10);
  //   let album = [];
  //   let dvd = 0;
  //   for (let x of songs) {
  //     if (dvd + x > mid) {
  //       dvd -= x;
  //       album.push(dvd);
  //       dvd = x;
  //     } else {
  //       dvd += x;
  //     }
  //   }
  //   album.push(dvd);
  //   if (album.length <= m) {
  //     answer = mid;
  //     right = mid - 1;
  //   } else {
  //     left = mid + 1;
  //   }
  // }

  return answer;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(solution(3, arr1));

// 1,2,3,4,5,6,7

// 1, 2, 34567 = 1, 2, 25
// 1, 23 4567 = 1, 5, 22
// 1 234 567 = 1, 9, 18
// 1 2345 67 = 1, 14, 13
// 1 23456 7 = 1, 20, 7
// 12 3 4567 = 3, 3, 22
// 12 34 567 = 3, 7, 18
// 12 345 67 = 3, 12, 13
// 12 3456 7 = 3, 18, 7
// 123 4 567 = 6, 4, 18
// 123 45 67 = 6, 9, 13
// 123 456 7 = 6, 15, 7
// 1234 5 67 = 10, 5, 13
// 1234 56 7 = 10, 11, 7 @)=====
// 12345 6 7 = 15, 6, 7
// => 15 개
