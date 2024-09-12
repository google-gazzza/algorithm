// find-the-divisors
// Find the divisors!
// difficult: 7kyu
// https://www.codewars.com/kata/544aed4c4a30184e960010f4
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/find-the-divisors

const divisors = (integer) => {
  let currentNum = integer - 1;
  const result = [];
  
  while (currentNum > 1) {
    if ((integer / currentNum) % 1 === 0) {
      result.push(integer / currentNum);
    }
    currentNum -= 1;
  }
  
  return result.length ? result : `${integer} is prime`;
};



console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
