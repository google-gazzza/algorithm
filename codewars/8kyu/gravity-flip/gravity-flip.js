// gravity-flip
// Gravity Flip
// difficulty: 8kyu
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

const flip = (d, arr) => arr.sort((a, b) => d === 'R' ? a - b : b - a);



console.log((flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]));
//?
console.log((flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]));
//?
