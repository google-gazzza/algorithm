// find-the-slope
// Find the Slope
// https://www.codewars.com/kata/55a75e2d0803fea18f00009d/

const slope = (points) => {
  const result = (points[3] - points[1]) / (points[2] - points[0]);
  return isFinite(result) ? String(result) : 'undefined';
};


console.log(slope([19, 3, 20, 3]), "0");
console.log(slope([2, 7, 4, -7]), "-7");
console.log(slope([10, 50, 30, 150]), "5");
console.log(slope([15, 45, 12, 60]), "-5");
console.log(slope([10, 20, 20, 80]), "6");
console.log(slope([-10, 6, -10, 3]), "undefined");
