// for-twins-2-math-operations
// For Twins: 2. Math operations
// difficulty: 8kyu
// https://www.codewars.com/kata/59c287b16bddd291c700009a

const iceBrickVolume = (radius, bottleLength, rimLength) => {
  return radius ** 2 * 2 * (bottleLength - rimLength);
};


console.log(iceBrickVolume(1, 10, 2), 16);
console.log(iceBrickVolume(5, 30, 7), 1150);
