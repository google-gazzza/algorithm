// consonant-value
// https://www.codewars.com/kata/59c633e7dcc4053512000073

const solve = (s) => s.split(/[aeiou]/g)
  .filter((v) => v)
  .map((v) => v.split('')
    .reduce((a, c) => a + c.charCodeAt(0) - 96, 0)
  )
  .sort((a, b) => a - b)
  .pop();

console.log(solve("zodiacs"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);
console.log(solve("twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);
