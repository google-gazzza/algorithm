// [Easy] 1725. Number Of Rectangles That Can Form The Largest Square
// 1725_number_of_rectangles_that_can_form_the_largest_square

// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Number Of Rectangles That Can Form The Largest Square.
// Memory Usage: 42.2 MB, less than 75.00% of TypeScript online submissions for Number Of Rectangles That Can Form The Largest Square.

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
function countGoodRectangles(rectangles: number[][]): number {
  let max: number = 0
  let maxCount: number = 0
  rectangles.forEach((item: number[]) => {
    const square: number = Math.min(item[0], item[1])
    if (square > max) {
      max = square
      maxCount = 1
    } else if (square === max) {
      maxCount += 1
    }
  })

  return maxCount
}
