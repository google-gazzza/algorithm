// is-a-number-prime
// https://www.codewars.com/kata/5262119038c0985a5b00029f/javascript

// Big O is O(sqrt(n))
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
// it's referenced https://www.quora.com/Whats-the-best-algorithm-to-check-if-a-number-is-prime


console.log(isPrime(0), false, "0 is not prime");
console.log(isPrime(1), false, "1 is not prime");
console.log(isPrime(2), true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");

console.log(isPrime(3), true, "3 is prime");
console.log(isPrime(5), true, "5 is prime");
console.log(isPrime(7), true, "7 is prime");
console.log(isPrime(41), true, "41 is prime");
console.log(isPrime(5099), true, "5099 is prime");

console.log(isPrime(4), false, "4 is not prime");
console.log(isPrime(6), false, "6 is not prime");
console.log(isPrime(8), false, "8 is not prime");
console.log(isPrime(9), false, "9 is not prime");
console.log(isPrime(45), false, "45 is not prime");
console.log(isPrime(-5), false, "-5 is not prime");
console.log(isPrime(-8), false, "-8 is not prime");
console.log(isPrime(-41), false, "-41 is not prime");

console.log(isPrime(0), false, "0 is not prime");
console.log(isPrime(1), false, "1 is not prime");
console.log(isPrime(2), true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");

console.log(isPrime(3), true, "3 is prime");
console.log(isPrime(5), true, "5 is prime");
console.log(isPrime(7), true, "7 is prime");
console.log(isPrime(41), true, "41 is prime");
console.log(isPrime(5099), true, "5099 is prime");

console.log(isPrime(4), false, "4 is not prime");
console.log(isPrime(6), false, "6 is not prime");
console.log(isPrime(8), false, "8 is not prime");
console.log(isPrime(9), false, "9 is not prime");
console.log(isPrime(45), false, "45 is not prime");
console.log(isPrime(-5), false, "-5 is not prime");
console.log(isPrime(-8), false, "-8 is not prime");
console.log(isPrime(-41), false, "-41 is not prime");
