// [JS][7kyu] Largest Elements
// largest-elements
// https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/javascript

const largest = (n, array) =>
  array
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse()

largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])
largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])
largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5])
largest(0, [1, 2, 3, 4, 8, 7, 6, 5])
