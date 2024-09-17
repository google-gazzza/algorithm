// exclamation-marks-series-11
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
// difficulty: 8kyu
// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/exclamation-marks-series-11-replace-all-vowel-to-exclamation-mark-in-the-sentence

const replace = (s) => s.replace(/[aeiou]/gi, '!');

console.log(replace("Hi!") === "H!!");
console.log(replace("!Hi! Hi!") === "!H!! H!!");
console.log(replace("aeiou") === "!!!!!");
console.log(replace("ABCDE") === "!BCD!");
