// power-of-two
// Power of two
// difficulty: 7kyu
// https://www.codewars.com/kata/534d0a229345375d520006a0

const isPowerOfTwo = (n) => Math.log2(n) % 1 === 0;



console.log(isPowerOfTwo(2), true);
console.log(isPowerOfTwo(4096), true);
console.log(isPowerOfTwo(5), false);
