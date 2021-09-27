// https://www.codewars.com/kata/542c0f198e077084c0000c2e/

// for iterator solution
// simple, fast
// but not pretty, and spend lots of memory
const getDivisorsCnt = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count;
};


// recursive solution
// it will spend space complexity 1 (memory optimized)
// but JavaScript compiler does not tail recursion optimized.
// so will get maximum call stack error
const getDivisorsCntRecursive = (n, step = n, count = 0) => {
  if (step < 1) {
    return count;
  }
  return getDivisorsCntRecursive(n, step - 1, n % step === 0 ? count + 1 : count);
};


// Array init solution.
// it will spend a lot of memory.
const getDivisorsCntArray = (n) => new Array(n).fill(0)
  .map((v, i) => ((n % (i + 1)) === 0 ? i + 1 : false))
  .filter((v) => v).length;


console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
