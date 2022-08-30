// [JS][8kyu] Find the smallest integer in the array
// find-the-smallest-integer-in-the-array
// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

let sif = new SmallestIntegerFinder();
sif.findSmallestInt([78, 56, 232, 12, 8]) === 8;
sif.findSmallestInt([78, 56, 232, 12, 18]) === 12;
sif.findSmallestInt([78, 56, 232, 412, 228]) === 56;
sif.findSmallestInt([78, 56, 232, 12, 0]) === 0;
sif.findSmallestInt([1, 56, 232, 12, 8]) === 1;
