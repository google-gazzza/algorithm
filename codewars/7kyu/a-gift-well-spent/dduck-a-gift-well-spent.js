// a-gift-well-spent
// A Gift Well Spent
// difficulty: 7kyu
// https://www.codewars.com/kata/54554846126a002d5b000854/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/a-gift-well-spent

const buy = (x, arr) => {
  if (!arr.length) {
    return null;
  }
  
  const result = arr.slice(0).reduce((acc, cur, i, array) => {
    if (array.slice(i).indexOf(x - acc) !== -1) {
      const indexes = [i - 1, array.slice(i).indexOf(x - acc) + i];
      array.splice(0);
      
      return indexes;
    }
    
    return cur;
  });
  
  return result.length === 2 ? result : null;
};

console.log(buy(2, [1, 1]), [0, 1]);
console.log(buy(3, [1, 1]), null);
console.log(buy(5, [5, 2, 3, 4, 5]), [1, 2]);
console.log(buy(5, [1, 2, 3, 4, 5]), [0, 3]);
console.log(buy(5, [0, 0, 0, 2, 3]), [3, 4]);
console.log(buy(97, [41, 91, 71, 34, 78, 91, 54, 35, 14, 44, 88, 39,
  10, 10, 38, 86, 71, 82, 2, 26, 56, 70, 98, 38, 63, 15, 16, 65, 53, 3, 18, 10, 56, 37,
  57, 85, 97, 16, 25, 84, 50, 81, 80, 80, 26, 15, 51, 30, 92, 18, 21,
  98, 60, 66, 83, 23, 58, 99, 36, 63, 67, 81, 96, 58, 5, 33, 58, 68,
  70, 32, 88, 17, 3, 74, 58, 94, 91, 23, 14]));
// Expected: '[0, 20]', instead got: '[29, 75]'
//?

console.log(buy(6, [95, 27, 87, 52, 15, 68, 41, 79, 83, 3, 58, 81, 53, 85, 11, 2, 65, 79, 43, 51,
  19, 65, 8, 42, 36, 73, 4, 73, 99, 52, 9, 17, 37, 86, 96, 34, 25, 84, 65, 24, 1,
  90, 56, 86, 17, 14, 32, 58, 19, 74, 26, 35, 11]));
// Expected: '[15, 26]', instead got: '[9, 9]'
