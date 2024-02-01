// Count the smiley faces!
// https://www.codewars.com/kata/583203e6eb35d7980400002a

const countSmileys = (arr) => arr.filter((v) => v.match(/(:|;)(-|~)(\)|D)|(:|;)(\)|D)/)).length;
//?

console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

// best practice in codewars
// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }
