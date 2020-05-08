// fibonacci-tribonacci-and-friends
// https://www.codewars.com/kata/556e0fccc392c527f20000c5/train/javascript

const xbonacci = (signature, n, count = 0) => {
  if (signature.length < n) {
    signature.push(signature.slice(count).reduce((a, c) => a + c));
    return xbonacci(signature, n, count + 1);
  }
  return signature.slice(0, n);
};

console.log(xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
console.log(xbonacci([1, 1], 10), [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
console.log(xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
console.log(xbonacci([1, 0, 0, 0, 0, 0, 1], 10), [1, 0, 0, 0, 0, 0, 1, 2, 3, 6]);
console.log(xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20), [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256]);
