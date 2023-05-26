// english-beggars
// English beggars
// https://www.codewars.com/kata/59590976838112bfea0000fa/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/english-beggars

const beggars = (values, n) => {
  const result = [];
  let sum = 0;
  
  for (let i = 0; i < n; i += 1) {
    sum = 0;
    
    for (let j = i; j < values.length; j += n) {
      sum += values[j];
    }
    
    result.push(sum);
  }
  
  return result;
};



console.log(beggars([1, 2, 3, 4, 5], 1), [15]);
console.log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
console.log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
console.log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
console.log(beggars([1, 2, 3, 4, 5], 0), []);
