// https://www.codewars.com/kata/5e2596a9ad937f002e510435/solutions/javascript

const infected = (s) => {
  const totalCount = s.match(/0|1/g);
  const infectedCount = s.split('X')
    .map((v) => (v.indexOf('1') !== -1 ? v.length : 0))
    .reduce((a, c) => a + c);
  
  return totalCount ? (100 * infectedCount) / totalCount.length : 0;
};

console.log(infected('01000000X000X011X0X'), 73.33333333333333, Number.EPSILON);
console.log(infected('01X000X010X011XX'), 72.72727272727273, Number.EPSILON);
console.log(infected('XXXXX'), 0, Number.EPSILON);
console.log(infected('0000000010'), 100, Number.EPSILON);
console.log(infected('X00X000000X10X0100'), 42.857142857142854, Number.EPSILON);
