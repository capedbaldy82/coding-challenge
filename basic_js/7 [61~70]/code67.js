let data = parseInt("59", 10);

const howPeople = (data) => {
  let temp = 1;
  while (true) {
    if ((temp * (temp - 1)) / 2 > data) {
      break;
    } else {
      temp += 1;
    }
  }
  return temp;
};

const howShake = () => {
  let numPeople = howPeople(data);
  let originShake = (numPeople * (numPeople - 1)) / 2;
  let runGuyShake = numPeople - 1 - (originShake - data);

  return [runGuyShake, numPeople];
};

console.log(howShake());
