// backwards-read-primes
// https://www.codewars.com/kata/5539fecef69c483c5a000015/

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  
  let root = Math.sqrt(num);
  
  for (let i = 2; i <= root; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

const isPalindromeNum = (num) => num === Number(String(num).split('').reverse().join(''));

const backwardsPrime = (start, stop) => {
  let result = [];
  while (start <= stop) {
    if (isPrime(start)
      && !isPalindromeNum(start)
      && isPrime(Number(String(start).split('').reverse().join('')))) {
      result.push(String(start));
    }
    start += 1;
  }
  
  return result.map(Number);
};

console.log(backwardsPrime(2, 100));
// [13, 17, 31, 37, 71, 73, 79, 97]
console.log(backwardsPrime(9900, 10000));
// [9923, 9931, 9941, 9967]
