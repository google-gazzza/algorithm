// collatz-conjecture-3n-1
// Collatz Conjecture (3n+1)
// difficulty: 8kyu
// https://www.codewars.com/kata/577a6e90d48e51c55e000217

const hotpo = (n, count = 0) => {
  if (n === 1) {
    return count;
  }
  
  return n % 2 === 1 ? hotpo(3 * n + 1, count + 1) : hotpo(n / 2, count + 1);
};



console.log(hotpo(1), 0);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);
