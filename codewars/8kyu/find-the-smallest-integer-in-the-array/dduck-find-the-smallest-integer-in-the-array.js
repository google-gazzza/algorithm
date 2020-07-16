// find-the-smallest-integer-in-the-array
// Find the smallest integer in the array
// difficulty: 8kyu
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/find-the-smallest-integer-in-the-array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}


var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');
