function solution(cacheSize, cities) {
  var answer = 0;
  let cache = Array.from({ length: cacheSize }, () => '');

  console.log(cache);
  for (let city of cities) {
    const lower_city = city.toLowerCase();
    if (cache.includes(lower_city)) {
      answer += 1;
      cache.splice(cache.indexOf(lower_city), 1);
    } else {
      answer += 5;
      cache.shift();
    }
    if (cacheSize > 0) {
      cache[cache.length] = lower_city;
    }
  }

  return answer;
}

const data = [
  [3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']],
  [3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul']],
  [
    2,
    [
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
      'SanFrancisco',
      'Seoul',
      'Rome',
      'Paris',
      'Jeju',
      'NewYork',
      'Rome',
    ],
  ],
  [
    5,
    [
      'Jeju',
      'Pangyo',
      'Seoul',
      'NewYork',
      'LA',
      'SanFrancisco',
      'Seoul',
      'Rome',
      'Paris',
      'Jeju',
      'NewYork',
      'Rome',
    ],
  ],
  [2, ['Jeju', 'Pangyo', 'NewYork', 'newyork']],
  [0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA']],
  [3, ['jeju', 'seoul', 'pangyo', 'seoul', 'incheon', 'jeju']],
  [0, ['la', 'la']],
];
console.log(solution(...data[1]));
