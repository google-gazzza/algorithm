// [Easy] 492. Construct the Rectangle
// 492_construct_the_rectangle

// https://leetcode.com/problems/construct-the-rectangle
// Runtime: 76 ms, faster than 85.95% of JavaScript online submissions for Construct the Rectangle.
// Memory Usage: 38.8 MB, less than 49.59% of JavaScript online submissions for Construct the Rectangle.

/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
  let num = Math.floor(Math.sqrt(area))
  while (true) {
    let pair = area / num
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
