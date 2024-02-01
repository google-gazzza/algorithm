// https://leetcode.com/problems/flipping-an-image
// Runtime: 56 ms, faster than 97.84% of JavaScript online submissions for Flipping an Image.
// Memory Usage: 35.1 MB, less than 41.67% of JavaScript online submissions for Flipping an Image.
const flipAndInvertImage = A => A.map(row => row.reverse().map(item => item === 0 ? 1 : 0))
