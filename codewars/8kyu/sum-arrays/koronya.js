// https://www.codewars.com/kata/53dc54212259ed3d4f00071c
// Sum Numbers
const sum = (numbers) => {
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

sum([]) === 0;

sum([1, 5.2, 4, 0, -1]) === 9.2;
