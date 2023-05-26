// steps-in-primes
// steps in Primes
// difficulty: 6kyu
// https://www.codewars.com/kata/5613d06cee1e7da6d5000055

function isPrime(n) {
  if (n % 1 !== 0) {
    return false;
  }
  if (n < 1) {
    return false;
  }
  if (n < 3) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  
  const limitNum = Math.sqrt(n);
  for (let i = 3; i <= limitNum; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

function step(g, begin, end) {
  for (let i = begin; i < end - g; i += 1) {
    if (isPrime(i) && isPrime(i + g)) {
      return [i, i + g];
    }
  }
  
  return null;
}


console.log(step(2, 100, 110), [101, 103]);
console.log(step(4, 100, 110), [103, 107]);
console.log(step(6, 100, 110), [101, 107]);
console.log(step(8, 300, 400), [359, 367]);
console.log(step(10, 300, 400), [307, 317]);
