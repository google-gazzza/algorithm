/*
primes-in-numbers

# codewars/5kyu/Primes in numbers
Difficulty: 5kyu
URL: https://www.codewars.com/kata/54d512e62a5e54c96200019e
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const primeDecomposition = (n) => {
  const primes = {};
  let currentNum = 2;
  
  while (n > 1) {
    if (n % currentNum === 0) {
      primes[currentNum] = (primes[currentNum] || 0) + 1;
      n /= currentNum;
    } else {
      currentNum += 1;
    }
  }
  
  return Object.entries(primes);
};


function primeFactors(n) {
  const primes = primeDecomposition(n);
  
  return primes.map((e) => {
    if (e[1] > 1) {
      return `(${e[0]}**${e[1]})`;
    }
    return `(${e[0]})`;
  }).join('');
}

console.log(primeFactors(7775460), '(2**2)(3**3)(5)(7)(11**2)(17)');
