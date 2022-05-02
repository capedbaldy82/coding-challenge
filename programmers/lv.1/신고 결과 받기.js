function solution(id_list, report, k) {
  let check = Array.from({ length: id_list.length }, () => 0); // 신고된 횟수
  let mailList = Array.from({ length: id_list.length }, () => 0); // 메일 받는 횟수
  let already = Array.from({ length: id_list.length }, () => []); // 중복 신고 방지용

  for (let x of report) {
    if (already[id_list.indexOf(x.split(' ')[0])].indexOf(x.split(' ')[1]) === -1) {
      check[id_list.indexOf(x.split(' ')[1])]++;
      already[id_list.indexOf(x.split(' ')[0])].push(x.split(' ')[1]);
    }
  }

  for (let i = 0; i < check.length; i++) {
    if (check[i] >= k) {
      for (let j = 0; j < already.length; j++) {
        if (already[j].indexOf(id_list[i]) !== -1) {
          mailList[j]++;
        }
      }
    }
  }

  return mailList;
}

const data = [
  {
    id_list: ['muzi', 'frodo', 'apeach', 'neo'],
    report: ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    k: 2,
  },
  {
    id_list: ['con', 'ryan'],
    report: ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
    k: 3,
  },
];

console.log(solution(data[1].id_list, data[1].report, data[1].k));
