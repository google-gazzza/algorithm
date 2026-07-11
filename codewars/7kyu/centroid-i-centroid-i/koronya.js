// [JS][7kyu] Centroid I
// centroid-i-centroid-i
// https://www.codewars.com/kata/58811e9cfd05cb5aed0000a4/train/javascript

const centroid = (c) => {
  const sumArr = c.reduce((acc, curr) => [acc[0] + curr[0], acc[1] + curr[1], acc[2] + curr[2]])
  const length = c.length
  return sumArr.map((item) => item / length)
}

centroid([
  [1, 0, 5],
  [0, 1, 5],
  [2, 2, 5],
])
centroid([
  [7, 0, 5],
  [3, 1, 5],
  [2, 1, 5],
])
