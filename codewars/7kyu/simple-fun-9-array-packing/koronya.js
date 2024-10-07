// [JS][7kyu] Simple Fun #9: Array Packing
// simple-fun-9-array-packing
// https://www.codewars.com/kata/588453ea56daa4af920000ca/train/javascript

const arrayPacking = (a) => a.reduce((acc, cur, index) => acc + cur * 256 ** index, 0)

arrayPacking([24, 85, 0]) === 21784
arrayPacking([23, 45, 39]) === 2567447
