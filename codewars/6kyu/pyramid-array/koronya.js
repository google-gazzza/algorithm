// [JS][6kyu] Pyramid Array
// pyramid-array
// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

const pyramid = (n) => Array.from({ length: n }).map((_, index) => new Array(index + 1).fill(1))

pyramid(0)
pyramid(1)
pyramid(2)
pyramid(3)
