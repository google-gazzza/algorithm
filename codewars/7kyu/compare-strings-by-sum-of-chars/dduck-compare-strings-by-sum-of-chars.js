// compare-strings-by-sum-of-chars
// Compare Strings by Sum of Chars
// difficulty: 7kyu
// https://www.codewars.com/kata/576bb3c4b1abc497ec000065

const sumAsciiCodes = (str) => str && (str.length === (str.match(/[a-z]/gi) || '').length) ?
  [...str.toUpperCase()].reduce((acc, cur) => acc + cur.charCodeAt(0), 0) : 0;

const compare = (s1, s2) => sumAsciiCodes(s1) === sumAsciiCodes(s2);



console.log(compare("AD", "BC"), true);
console.log(compare("AD", "DD"), false);
console.log(compare(null, "DD"), false);
