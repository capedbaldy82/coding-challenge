let solution = function (a = 1, b = 1) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = new Date(`2021-${a}-${b}`);
  answer = days[day.getDay()];

  return answer;
};

let month = parseInt(prompt());
let day = parseInt(prompt());

console.log(solution(month, day));
