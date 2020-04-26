// IQ Test
// https://www.codewars.com/kata/552c028c030765286c00007d

const iqTest = (numbers) => {
  const splitedNumbers = numbers.split(" ").map(Number);
  const isEvenNumberMore = splitedNumbers.filter((v) => v % 2 === 0).length > 1;
  
  if (isEvenNumberMore) {
    return splitedNumbers.findIndex((v) => v % 2 === 1) + 1;
  }
  return splitedNumbers.findIndex((v) => v % 2 === 0) + 1;
};

console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);
console.log(iqTest("5 3 2"), 3);
