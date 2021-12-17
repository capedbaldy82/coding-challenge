let tickets = "원범 원범 혜원 혜원 혜원 혜원 유진 유진".split(" ");
let votedPeople = {};
let result;

tickets.forEach((person) => {
  if (person in votedPeople) {
    votedPeople[person] += 1;
  } else {
    votedPeople[person] = 1;
  }
});

result = Object.keys(votedPeople).sort(
  (a, b) => votedPeople[b] - votedPeople[a]
);

console.log(result[0]);
