// [JS][7kyu] Perimeter sequence
// perimeter-sequence
// https://www.codewars.com/kata/589519d1f0902e01af000054/train/javascript

const perimeterSequence = (a, n) => 4 * n * a

perimeterSequence(1, 3) === 12

// 1 + 1 + 2
// 2 + 2 + 2 + 2
// 3 + 3 + 2 + 2 + 2
// 4 + 4 + 2 + 2 + 2 + 2
// n + n + n * 2
