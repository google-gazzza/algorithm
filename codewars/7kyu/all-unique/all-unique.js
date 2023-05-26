// all-unique
// All unique
// difficulty: 7kyu
// https://www.codewars.com/kata/553e8b195b853c6db4000048/

const hasUniqueChars = (str) => new Set([...str]).size === str.length;

console.log(hasUniqueChars("  nAa"), false); // because there are two spaces ' '
console.log(hasUniqueChars("abcdef"), true);
console.log(hasUniqueChars("aA"), true); // case - sensitivity
console.log(hasUniqueChars("++-"), false); // because there are two '+'
