// [JS][7kyu] Geometric Progression Sequence
// geometric-progression-sequence
// https://www.codewars.com/kata/55caef80d691f65cb6000040/train/javascript

const geometricSequenceElements = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i).join(', ')

geometricSequenceElements(2, 3, 5)
geometricSequenceElements(2, 2, 10)
geometricSequenceElements(1, -2, 10)
