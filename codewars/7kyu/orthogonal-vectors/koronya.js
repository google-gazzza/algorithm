// [JS][7kyu] Orthogonal Vectors
// orthogonal-vectors
// https://www.codewars.com/kata/53670c5867e9f2222f000225/train/javascript

const isOrthogonal = (u, v) => {
  if (u.length !== v.length) {
    return false
  }
  const dotProduct = u.reduce((acc, cur, idx) => acc + cur * v[idx], 0)
  return dotProduct === 0
}

isOrthogonal([1, 2], [2, 1]) === false
isOrthogonal([1, -2], [2, 1]) === true
isOrthogonal([7, 8], [7, -6]) === false
isOrthogonal([-13, -26], [-8, 4]) === true
isOrthogonal([1, 2, 3], [0, -3, 2]) === true
isOrthogonal([3, 4, 5], [6, 7, -8]) === false
isOrthogonal([3, -4, -5], [-4, -3, 0]) === true
isOrthogonal([1, -2, 3, -4], [-4, 3, 2, -1]) === true
isOrthogonal([2, 4, 5, 6, 7], [-14, -12, 0, 8, 4]) === true
isOrthogonal([5, 10, 1, 20, 2], [-2, -20, -1, 10, 5]) === false
