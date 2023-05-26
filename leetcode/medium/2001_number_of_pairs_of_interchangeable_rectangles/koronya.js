// [Medium] 2001. Number of Pairs of Interchangeable Rectangles
// 2001_number_of_pairs_of_interchangeable_rectangles

// https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles
// Runtime: 360 ms, faster than 66.67% of JavaScript online submissions for Number of Pairs of Interchangeable Rectangles.
// Memory Usage: 81.6 MB, less than 80.73% of JavaScript online submissions for Number of Pairs of Interchangeable Rectangles.

const getNc2 = (n) => (n * (n - 1)) / 2

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
const interchangeableRectangles = function (rectangles) {
  const ratioArr = rectangles.map(([width, height]) => width / height)
  const ratioMap = new Map()
  ratioArr.forEach((ratio) => {
    ratioMap.set(ratio, (ratioMap.get(ratio) || 0) + 1)
  })
  return [...ratioMap].reduce((acc, cur) => acc + getNc2(cur[1]), 0)
}

interchangeableRectangles([
  [4, 8],
  [3, 6],
  [10, 20],
  [15, 30],
]) //?
interchangeableRectangles([
  [
    [4, 5],
    [7, 8],
  ],
]) //?

const getNcr = (n, r) => {
  const max = r
  let child = n
  let parent = 1
  let adjustR = 1
  for (let i = 1; i < max; i += 1 || 0) {
    n -= 1
    adjustR += 1
    child *= n
    parent *= adjustR
  }

  return child / parent
}
