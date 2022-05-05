function solution(bridge_length, weight, truck_weights) {
  var answer = 0; // 총 걸린 시간
  let current = 0; // 다리 위 무게 값
  let bridge = Array.from({ length: bridge_length }, () => 0); // 다리

  let truck = truck_weights.shift();

  answer++; // 1초 증가
  bridge.unshift(truck); // 트럭 진입
  bridge.pop(); // 트럭 진입
  current += truck; // 트럭 진입

  while (current) {
    current -= bridge.pop(); // 곧 지나갈 트럭 빼주기
    bridge.unshift(0); // 막 들어간 트럭 앞으로 한칸 이동

    truck = truck_weights.shift(); // 다음 트럭

    // 다음 트럭 들어갈 수 있는지 확인
    if (current + truck <= weight) {
      bridge.shift();
      bridge.unshift(truck);
      current += truck;
    } else {
      truck_weights.unshift(truck); // 불가능일 경우 대기열에 다시 넣어주기
    }

    answer++;
  }

  return answer;
}

const data = [
  { bridge_length: 2, weight: 10, truck_weights: [4, 5] },
  { bridge_length: 2, weight: 10, truck_weights: [7, 4, 5, 6] },
  { bridge_length: 100, weight: 100, truck_weights: [10] },
  { bridge_length: 100, weight: 100, truck_weights: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10] },
];

console.log(solution(data[3].bridge_length, data[3].weight, data[3].truck_weights));

// var answer = 0; // 총 걸린 시간
// let count = 0; // 맨 앞이 걸린 시간
// let current = 0; // 다리 위 무게 값
// let bridge = []; // 다리 위에 있는 트럭
// let pass = []; // 지나간 트럭
// let allpassTruck = truck_weights.slice().length;

// while (pass.length !== allpassTruck) {
//   if (count === bridge_length) {
//     if (bridge.length > 1) {
//       count = count - 1;
//     } else {
//       count = 0;
//     }

//     let passTruck = bridge.shift();
//     current -= passTruck;
//     pass.push(passTruck);
//   }

//   if (current + truck_weights[0] <= weight) {
//     let entryTruck = truck_weights.shift();
//     current += entryTruck;
//     bridge.push(entryTruck);
//   }
//   answer++;
//   count++;
// }
