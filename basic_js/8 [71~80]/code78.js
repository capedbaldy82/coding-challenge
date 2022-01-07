const solution = (data) => {
  let answer = [];
  let howFood = data[0];
  let foodList = Array(howFood * 1)
    .fill()
    .map((map, i) => i + 1);
  let howJump = data[1];

  // 최초 자신이 앉아 있는 자리의 요리 먹고 먹은 음식(0)으로 변환
  foodList[0] = 0;
  howFood -= 1;
  while (howFood > 2) {
    // 먹은 음식(0)을 기준으로 인덱스 +3(howJump)하여 먹을 음식으로 지정
    // 먹을 음식의 인덱스 값이 배열의 최대 인덱스보다 클 경우 -5로 되돌리기
    if (foodList.indexOf(0) + howJump > foodList.length - 1) {
      foodList[foodList.indexOf(0) + howJump - 5] = -1;
    } else {
      foodList[foodList.indexOf(0) + howJump] = -1;
    }
    // 먹은 음식(0) 제거
    foodList.splice(foodList.indexOf(0), 1);
    // 먹을 음식을 먹고 먹은 음식(0)으로 변환
    foodList[foodList.indexOf(-1)] = 0;

    howFood -= 1;
  }

  // 먹은 음식(0) 정리하고 남은 음식만 배열에 남기기
  foodList.splice(foodList.indexOf(0), 1);

  return foodList;
};

let data = "6 3".split(" ").map((e) => parseInt(e));

console.log(solution(data));
