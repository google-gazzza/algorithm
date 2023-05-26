// [Easy] 1725. Number Of Rectangles That Can Form The Largest Square
// 1725_number_of_rectangles_that_can_form_the_largest_square

// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square
// Runtime: 76 ms, faster than 98.63% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.
// Memory Usage: 40.5 MB, less than 100.00% of JavaScript online submissions for Number Of Rectangles That Can Form The Largest Square.

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const countGoodRectangles = function (rectangles) {
  let max = 0
  let maxCount = 0
  rectangles.forEach((item) => {
    const square = Math.min(item[0], item[1])
    if (square > max) {
      max = square
      maxCount = 1
    } else if (square === max) {
      maxCount += 1
    }
  })

  return maxCount
}
