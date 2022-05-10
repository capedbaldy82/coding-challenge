function solution(vac, peo) {
  var answer = [];
  let temp = [];

  let sortedVac = [];
  let sortedPeo = [];

  for (let i = 0; i < vac.length; i++) {
    let div = vac[i].split(' ');
    sortedVac.push([div[0], parseInt(div[1], 10), parseInt(div[2], 10), parseInt(div[3], 10)]);
  }

  for (let i = 0; i < peo.length; i++) {
    let div = peo[i].split(' ');
    let preferVac = [];
    for (let j = 2; j < div.length; j++) {
      preferVac.push(div[j]);
    }
    sortedPeo.push([div[0], parseInt(div[1], 10), preferVac]);
  }

  sortedPeo.sort((a, b) => b[1] - a[1]);

  sortedPeo.forEach((person) => {
    let flag = true;
    for (let i = 0; i < person[2].length; i++) {
      for (let j = 0; j < vac.length; j++) {
        if (sortedVac[j][0] === person[2][i]) {
          if (person[1] >= sortedVac[j][2] && person[1] <= sortedVac[j][3] && sortedVac[j][1] > 0) {
            sortedVac[j][1]--;
            temp.push([sortedVac[j][0], person[0]]);
            flag = false;
            break;
          }
        }
      }
      if (!flag) break;
    }
  });

  sortedVac.sort();
  temp.sort();

  let vacArr = [];
  let peoArr = [];

  for (let i = 0; i < temp.length; i++) {
    if (vacArr.indexOf(temp[i][0]) === -1) {
      vacArr.push(temp[i][0]);
      peoArr.push([]);
      peoArr[vacArr.indexOf(temp[i][0])].push(temp[i][1]);
    } else {
      peoArr[vacArr.indexOf(temp[i][0])].push(temp[i][1]);
    }
  }

  for (let i = 0; i < vacArr.length; i++) {
    let str = vacArr[i];
    for (let j = 0; j < peoArr[i].length; j++) {
      str += ' ' + peoArr[i][j];
    }
    answer.push(str);
  }

  return answer;
}

const data = [
  {
    vac: ['PIZER 3 20 99', 'ASTRA 1 9 55', 'YANSEN 10000 22 49'],
    peo: ['susan 50 ASTRA YANSEN PIZER', 'kevin 55 ASTRA', 'luka 60 PIZER ASTRA', 'erica 20 YANSEN PIZER ASTRA', 'roy 20 PIZER'],
  },
  {
    vac: ['Y 1 30 40', 'X 9999 1 99', 'Z 9 50 65', 'T 10000 1 99'],
    peo: ['aaa 50 Z Y', 'bbb 40 Y T X', 'cc 30 Y T', 'dd 65 Y Z', 'gg 1 T'],
  },
];
console.log(solution(data[0].vac, data[0].peo));
