// hex-to-decimal
// Hex to Decimal
// difficulty: 8kyu
// https://www.codewars.com/kata/57a4d500e298a7952100035d

const hexToDec = (hexString) => parseInt(hexString, 16);



console.log(hexToDec('1'), 1);
console.log(hexToDec('a'), 10);
console.log(hexToDec('10'), 16);
console.log(hexToDec('FF'), 255);
console.log(hexToDec('-C'), -12);
