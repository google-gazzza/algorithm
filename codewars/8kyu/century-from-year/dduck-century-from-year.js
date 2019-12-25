// https://www.codewars.com/kata/century-from-year
// reference - https://en.wikipedia.org/wiki/Century

const century = (year) => Math.floor(year / 100) + (year % 100 ? 1 : 0);

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');
console.log(century(0), 0, 'Testing for year 0');
