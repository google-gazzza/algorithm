// grouped-by-commas
// Grouped by commas
// difficuty: 6kyu
// https://www.codewars.com/kata/5274e122fc75c0943d000148

const groupByCommas = (n) => {
  let str = String(n);
  const result = [];
  
  while (str.length > 0) {
    result.unshift(`,${str.slice(-3)}`);
    str = str.slice(0, -3);
  }
  
  return result.join('').slice(1);
};


console.log(groupByCommas(1), '1');
console.log(groupByCommas(10), '10');
console.log(groupByCommas(100), '100');
console.log(groupByCommas(1000), '1,000');
console.log(groupByCommas(10000), '10,000');
console.log(groupByCommas(100000), '100,000');
console.log(groupByCommas(1000000), '1,000,000');
console.log(groupByCommas(35235235), '35,235,235');
