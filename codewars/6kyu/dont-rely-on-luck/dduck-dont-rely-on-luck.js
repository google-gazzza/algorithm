// dont-rely-on-luck.
// https://www.codewars.com/kata/5268af3872b786f006000228/

Math.random = () => 1;
const guess = 101;

const lucky_number = Math.floor(Math.random() * 100 + 1);
console.log(guess, lucky_number, "Sorry. Unlucky this time.");
