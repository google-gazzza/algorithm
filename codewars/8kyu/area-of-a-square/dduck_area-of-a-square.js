// https://www.codewars.com/kata/5748838ce2fab90b86001b1a

const squareArea = (a) => {
  const circumference = (a * 4);
  const radius = circumference / (2 * Math.PI);
  return Math.round((radius ** 2) * 100) / 100;
};

squareArea(2);
//?
// C = 2pi * r
// area = pi * r^2
