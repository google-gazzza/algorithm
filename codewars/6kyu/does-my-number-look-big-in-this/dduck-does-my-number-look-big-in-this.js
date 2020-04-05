// does-my-number-look-big-in-this
// https://www.codewars.com/kata/5287e858c6b5a9678200083c

const narcissistic = (value) => [...String(value)].reduce((a, c, i, arr) => {
  return a + (Number(c) ** arr.length);
}, 0) === value;


console.log(narcissistic(7), true, "7 is narcissistic");
console.log(narcissistic(371), true, "371 is narcissistic");
