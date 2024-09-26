// casino-chips
// Casino chips
// difficulty: 6kyu
// https://www.codewars.com/kata/5e0b72d2d772160011133654/

const solve = (arr, count = 0) => {
  let [a, b, c] = arr.sort((a, b) => b - a);
  let newCount = 0;
  
  while (b > 0) {
    newCount = Math.ceil(b / 2);
    count += newCount;
    b -= newCount;
    a -= newCount;
    [a, b, c] = [a, b, c].sort((a, b) => b - a);
  }
  
  return count;
};



console.log(solve([1, 1, 1]), 1);
console.log(solve([1, 2, 1]), 2);
console.log(solve([4, 1, 1]), 2);
console.log(solve([8, 2, 8]), 9);
console.log(solve([8, 1, 4]), 5);
console.log(solve([7, 4, 10]), 10);
console.log(solve([12, 12, 12]), 18);
console.log(solve([1, 23, 2]), 3);
