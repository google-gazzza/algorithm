// double-char
// Double Char
// difficulty: 8kyu
// https://www.codewars.com/kata/56b1f01c247c01db92000076/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/double-char

const doubleChar = (str) => [...str].map((v) => v.repeat(2)).join('');

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*(").length, "%%^^&&**((".length);
