// parse-float
// Parse float
// difficulty: 8kyu
// https://www.codewars.com/kata/57a386117cb1f31890000039/

const parseF = (n) => Number.isNaN(Number.parseFloat(n)) ? null : Number.parseFloat(n);



console.log(parseF("1"), 1.0);
