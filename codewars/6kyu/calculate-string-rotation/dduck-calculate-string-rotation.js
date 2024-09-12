// calculate-string-rotation
// Calculate String Rotation
// difficulty: 6kyu
// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/calculate-string-rotation

const shiftedDiff = (shiftedWord, targetWord, count = 0) => {
  if (shiftedWord === targetWord) {
    return count;
  }
  if (count > shiftedWord.length) {
    return -1;
  }
  
  return shiftedDiff(shiftedWord[shiftedWord.length - 1] + shiftedWord.slice(0, shiftedWord.length - 1), targetWord, count + 1);
};



console.log(shiftedDiff("eecoff", "coffee"), 4);
console.log(shiftedDiff("Moose", "moose"), -1);
console.log(shiftedDiff("isn't", "'tisn"), 2);
console.log(shiftedDiff("Esham", "Esham"), 0);
console.log(shiftedDiff(" ", " "), 0);
console.log(shiftedDiff("hoop", "pooh"), -1);
console.log(shiftedDiff("  ", " "), -1);







