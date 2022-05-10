function solution(reqs) {
  var answer = [];
  let account = [];
  let pocket = [];
  let maxmoney = [];

  for (let i = 0; i < reqs.length; i++) {
    let curReq = reqs[i].split(' ');
    let reqType = curReq[0];
    let name = curReq[1];
    let money = parseInt(curReq[2], 10);

    if (reqType === 'CREATE') {
      if (account.indexOf(name) === -1) {
        account.push(name);
        pocket.push(0);
        maxmoney.push(money);
        answer.push(200);
      } else {
        answer.push(403);
      }
    } else if (reqType === 'DEPOSIT') {
      if (account.indexOf(name) === -1) {
        answer.push(404);
      } else {
        pocket[account.indexOf(name)] += money;
        answer.push(200);
      }
    } else if (reqType === 'WITHDRAW') {
      if (account.indexOf(name) === -1) {
        answer.push(404);
      } else {
        if (money > pocket[account.indexOf(name)] + maxmoney[account.indexOf(name)]) {
          answer.push(403);
        } else {
          pocket[account.indexOf(name)] -= money;
          answer.push(200);
        }
      }
    }
  }

  return answer;
}

const data = [
  ['DEPOSIT 3a 10000', 'CREATE 3a 300000', 'WITHDRAW 3a 150000', 'WITHDRAW 3a 150001'],
  ['CREATE 3a 10000', 'CREATE 3a 20000', 'CREATE 2bw 30000'],
  ['CREATE 3a 300000', 'DEPOSIT 3a 10000', 'WITHDRAW 3a 150000', 'WITHDRAW 3a 150001'],
];
console.log(solution(data[2]));

const arr = [1];
console.log(arr);
arr[2] = 3;
console.log(arr);
