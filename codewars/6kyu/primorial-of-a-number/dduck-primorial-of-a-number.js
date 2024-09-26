// primorial-of-a-number
// Primorial Of a Number
// difficulty: 6kyu
// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/primorial-of-a-number

const findPrimes = (primeCount) => {
  if (primeCount < 1) {
    return 0;
  }
  
  const primes = [2];
  
  let currentNum = 3;
  
  while (primes.length !== primeCount) {
    if (!primes.some((v) => currentNum % v === 0)) {
      primes.push(currentNum);
    }
    currentNum += 1;
  }
  
  return primes;
};

const numPrimorial = (n) => findPrimes(n).reduce((acc, cur) => acc * cur);



console.log(numPrimorial(3), 30);
console.log(numPrimorial(4), 210);
console.log(numPrimorial(5), 2310);
console.log(numPrimorial(8), 9699690);
console.log(numPrimorial(9), 223092870);
