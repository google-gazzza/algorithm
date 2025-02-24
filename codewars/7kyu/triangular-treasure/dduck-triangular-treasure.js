// triangular-treasure
// Triangular Treasure
// https://www.codewars.com/kata/525e5a1cb735154b320002c8/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/triangular-treasure

const triangular = (n) => {
  let result = 0;
  
  while (n > 0) {
    result += n;
    n -= 1;
  }
  
  return result;
};
// const triangular = (n, sum = 0) => n ? triangular(n - 1, sum + n) : sum;


console.log(triangular(2), 3);
console.log(triangular(4), 10);
