// surface-area-and-volume-of-a-box
// Surface Area and Volume of a Box
// https://www.codewars.com/kata/565f5825379664a26b00007c
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/surface-area-and-volume-of-a-box

const getSize = (width, height, depth) => [
  ((width * height) + (width * depth) + (depth * height)) * 2,
  width * height * depth
];



console.log(getSize(4, 2, 6)[1], 48);
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);
