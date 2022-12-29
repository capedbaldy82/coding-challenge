function solution(str1, str2) {
  var answer = 0;
  let str1_set = [];
  let str2_set = [];
  let reg_exp = /^[a-zA-Z]*$/;
  let [intersection, union] = [0, 0];

  for (let i = 0; i < str1.length - 1; i++) {
    if (reg_exp.test(str1[i] + str1[i + 1])) {
      str1_set.push((str1[i] + str1[i + 1]).toUpperCase());
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    if (reg_exp.test(str2[i] + str2[i + 1])) {
      str2_set.push((str2[i] + str2[i + 1]).toUpperCase());
    }
  }

  for (let i = 0; i < str1_set.length; i++) {
    for (let j = 0; j < str2_set.length; j++) {
      if (str1_set[i] === str2_set[j]) {
        str1_set[i] = 0;
        str2_set[j] = 0;
        intersection++;
        break;
      }
    }
  }

  union = str1_set.length + str2_set.length - intersection;

  return union ? Math.floor((intersection / union) * 65536) : 65536;
}

const data = [
  ['FRANCE', 'french'],
  ['handshake', 'shake hands'],
  ['aa1+aa2', 'AAAA12'],
  ['E=M*C^2', 'e=m*c^2'],
];
console.log(solution(...data[3]));
