// [JS][7kyu] Geometric sequence - sum of all elements
// geometric-sequence-sum-of-all-elements
// https://www.codewars.com/kata/55cb000321ca31039e00007d/train/javascript

const GeometricSequenceSum = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i).reduce((acc, cur) => acc + cur, 0)

GeometricSequenceSum(2, 3, 5) === 242
GeometricSequenceSum(1, 1, 2) === 2
GeometricSequenceSum(2, 2, 10) === 2046
GeometricSequenceSum(1, -2, 10) === -341
GeometricSequenceSum(1, 0.5, 10) === 1.998046875
