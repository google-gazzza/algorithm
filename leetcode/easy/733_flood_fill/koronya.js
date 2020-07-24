// [Easy] 733. Flood Fill
// 733_flood_fill

// https://leetcode.com/problems/flood-fill
// Runtime: 92 ms, faster than 56.42% of JavaScript online submissions for Flood Fill.
// Memory Usage: 39.5 MB, less than 5.00% of JavaScript online submissions for Flood Fill.
const floodFill = (image, sr, sc, newColor) => {
  const base = image[sr][sc]
  if (base === newColor) {
    return image
  }
  const rowLimit = image.length - 1
  const colLimit = image[0].length - 1
  const queue = [[sr, sc]]
  while (queue.length > 0) {
    const [row, col] = queue.shift()
    if (image[row][col] === base) {
      image[row][col] = newColor
      if (row > 0) {
        queue.push([row - 1, col])
      }
      if (row < rowLimit) {
        queue.push([row + 1, col])
      }
      if (col > 0) {
        queue.push([row, col - 1])
      }
      if (col < colLimit) {
        queue.push([row, col + 1])
      }
    }
  }
  return image
}
