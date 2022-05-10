function solution(record) {
  let answer = [];
  let user = {};

  for (let i = 0; i < record.length; i++) {
    const [type, id, name] = record[i].split(' ');

    if (type === 'Enter') {
      user[id] = name;
      answer.push([id, '님이 들어왔습니다.']);
    } else if (type === 'Leave') {
      answer.push([id, '님이 나갔습니다.']);
    } else {
      user[id] = name;
    }
  }

  answer = answer.map((val) => user[val[0]] + val[1]);

  return answer;
}

const data = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'];
console.log(solution(data));
