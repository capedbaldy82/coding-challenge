function solution(numbers) {
  const number = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let num in number) {
    if (numbers.includes(num)) {
      numbers = numbers.split(num).join(number[num]);
    }
  }

  return numbers;
}

const data = ['onetwothreefourfivesixseveneightnine', 'onefourfourzerosixseven'];
for (let i = 0; i < data.length; i++) {
  console.log(solution(data[i]));
}
