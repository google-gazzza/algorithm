// take-a-number-and-sum-its-digits -raised-to-the-consecutive-powers-and ....¡Eureka
// https://www.codewars.com/kata/5626b561280a42ecc50000d1

const sumDigPow = (a, b) => {
  const result = [];
  
  while (a <= b) {
    const powResult = String(a).split('')
      .reduce((a, c, i) => a + (Number(c) ** (i + 1)), 0);
    
    if (powResult === a && a <= b) {
      result.push(a);
    }
    a += 1;
  }
  
  return result;
};

console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
console.log(sumDigPow(10, 100), [89]);
console.log(sumDigPow(90, 100), []);
console.log(sumDigPow(90, 150), [135]);
console.log(sumDigPow(50, 150), [89, 135]);
console.log(sumDigPow(10, 150), [89, 135]);
