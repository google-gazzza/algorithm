// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p, count = 1) => {
  const result = p0 + (p0 * (percent / 100)) + aug;
  return result >= p ? count : nbYear(result, percent, aug, p, count + 1);
};

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
