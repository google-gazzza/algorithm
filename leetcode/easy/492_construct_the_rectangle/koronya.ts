// [Easy] 492. Construct the Rectangle
// 492_construct_the_rectangle

// https://leetcode.com/problems/construct-the-rectangle
// Runtime: 84 ms, faster than 66.67% of TypeScript online submissions for Construct the Rectangle.
// Memory Usage: 40.6 MB, less than 16.67% of TypeScript online submissions for Construct the Rectangle.

/**
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle(area: number): number[] {
  let num: number = Math.floor(Math.sqrt(area))
  while (true) {
    let pair: number = area / num
    if (Number.isInteger(pair) === true) {
      return [pair, num]
    }
    num -= 1
  }
}

// constructRectangle(24) //?
// constructRectangle(3) //?
// constructRectangle(4) //?
// constructRectangle(8) //?
