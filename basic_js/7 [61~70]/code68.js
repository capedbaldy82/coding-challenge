const solution = (busTime, nowTime) => {
  let answer = [];

  busTime = busTime.map((bus) => {
    bus = bus.split(":");
    return parseInt(bus[0].concat(bus[1]));
  });
  nowTime = nowTime.split(":");
  nowTime = nowTime[0].concat(nowTime[1]);

  busTime.forEach((bus) => {
    let gapTime = 0;
    if (bus < nowTime) {
      answer.push("지나갔습니다");
    } else {
      gapTime = bus - nowTime - 40;
      if (gapTime < 60) {
        answer.push(`00시간${gapTime}분`);
      } else if (gapTime < 100) {
        answer.push(`0${parseInt(gapTime / 60)}시간${gapTime % 60}분`);
      } else if (gapTime < 1000) {
        gapTime += "";
        answer.push(`0${gapTime[0]}시간${gapTime[1]}${gapTime[2]}분`);
      } else {
        gapTime += "";
        answer.push(
          `${gapTime[0]}${gapTime[1]}시간${gapTime[2]}${gapTime[3]}분`
        );
      }
    }
  });

  return answer;
};

const busTime = ["12:30", "13:20", "14:13"];
const nowTime = "12:40";

console.log(solution(busTime, nowTime));
