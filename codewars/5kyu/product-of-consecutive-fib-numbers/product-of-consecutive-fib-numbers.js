// product-of-consecutive-fib-numbers
// https://www.codewars.com/kata/5541f58a944b85ce6d00006a

const productFib = (targetNum, prev = 0, cur = 1) => {
  if ((prev * cur) >= targetNum) {
    return [prev, cur, prev * cur === targetNum];
  }
  
  return productFib(targetNum, cur, prev + cur);
};

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);
