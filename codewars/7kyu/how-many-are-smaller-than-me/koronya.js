// [JS][7kyu] How many are smaller than me?
// how-many-are-smaller-than-me
// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

const smaller = (nums) => nums.map((num, index) => nums.slice(index + 1).filter((item) => item < num).length)
smaller([5, 4, 3, 2, 1])
smaller([1, 2, 3])
smaller([1, 2, 0])
// smaller([1, 2, 1])
// smaller([1, 1, -1, 0, 0])
// smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])
