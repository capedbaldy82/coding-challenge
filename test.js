const n = [6, 10, 2];
const m = [3, 30, 34, 5, 9];

m.sort((a, b) => {
  if ((a + '').split('')[0] > (b + '').split('')[0]) {
    return -1;
  } else if ((a + '').split('')[0] < (b + '').split('')[0]) {
    return 1;
  } else {
    let max = (a + '').length > (b + '').length ? (a + '').length : (b + '').length;
    let arr1 = (a + '').padEnd(max, 0).split('');
    let arr2 = (b + '').padEnd(max, 0).split('');

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (parseInt(arr1[i], 10) > parseInt(arr2[i], 10)) return -1;
      else if (parseInt(arr1[i], 10) < parseInt(arr2[i], 10)) return 1;
      else {
      }
    }
  }
});

console.log(m);
