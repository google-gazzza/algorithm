// https://www.codewars.com/kata/5517fcb0236c8826940003c9/train/javascript

const primeFactorizationFP = (integer, currentPrime = 2, primes = {}) => {
  if (currentPrime > integer) {
    return primes;
  }
  
  const remainder = integer % currentPrime;
  
  if (remainder === 0) {
    primes[currentPrime] = (primes[currentPrime] || 0) + 1;
    return primeFactorizationFP(integer / currentPrime, 2, primes);
  }
  
  return primeFactorizationFP(integer, currentPrime + 1, primes);
};

const primeFactorization = (integer, currentPrime = 2, primes = {}) => {
  while (currentPrime <= integer) {
    const remainder = integer % currentPrime;
    
    if (remainder === 0) {
      primes[currentPrime] = (primes[currentPrime] || 0) + 1;
      integer = integer / currentPrime;
      currentPrime = 2;
    } else {
      currentPrime += 1;
    }
  }
  
  return primes;
};

const leastCommonMultipleViaPrimeFactorization = (numbers = []) => {
  const commonPrimes = {};
  
  numbers.forEach((v) => {
    const primes = primeFactorization(v);
    Object.keys(primes)
      .forEach((key) => {
        if ((commonPrimes[key] || 0) < primes[key]) {
          commonPrimes[key] = primes[key];
        }
      });
  });
  
  return Object.keys(commonPrimes)
    .map((key) => key ** commonPrimes[key])
    .reduce((a, b) => a * b, 1);
};

const greatestCommonFactorViaEuclideanAlgorithm = (a, b) => {
  return a % b === 0 ? b : greatestCommonFactorViaEuclideanAlgorithm(b, a % b);
};

const simplifyFractionsViaGreatestCommonFactor = (numerator, denominator) => {
  const GCF = greatestCommonFactorViaEuclideanAlgorithm(numerator, denominator);
  const result = [numerator / GCF, denominator / GCF];
  
  return result[1] === 1 ? result[0] : result;
};

const sumFracts = (fractions) => {
  const lcm = leastCommonMultipleViaPrimeFactorization(fractions.map((v) => v[1]));
  const sumOfNumerator = fractions.map((v) => v[0] * (lcm / v[1]))
    .reduce((a, c) => a + c, 0);
  const result = simplifyFractionsViaGreatestCommonFactor(sumOfNumerator, lcm);
  
  return result !== 0 ? result : null;
};

console.log(sumFracts([[1, 2], [1, 3], [1, 4]]), [13, 12]);
console.log(sumFracts([[1, 3], [5, 3]]), 2);
console.log(sumFracts([[12, 3], [15, 3]]), 9);
console.log(sumFracts([[2, 7], [1, 3], [1, 12]]), [59, 84]);
