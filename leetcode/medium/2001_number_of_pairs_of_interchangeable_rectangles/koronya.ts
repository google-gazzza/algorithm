// [Medium] 2001. Number of Pairs of Interchangeable Rectangles
// 2001_number_of_pairs_of_interchangeable_rectangles

// https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles
// Runtime: 388 ms, faster than 48.15% of TypeScript online submissions for Number of Pairs of Interchangeable Rectangles.
// Memory Usage: 81.3 MB, less than 85.19% of TypeScript online submissions for Number of Pairs of Interchangeable Rectangles.

const getNc2 = (n: number): number => (n * (n - 1)) / 2

function interchangeableRectangles(rectangles: number[][]): number {
  const ratioArr = rectangles.map(([width, height]) => width / height)
  const ratioMap = new Map<number, number>()
  ratioArr.forEach((ratio) => {
    ratioMap.set(ratio, (ratioMap.get(ratio) || 0) + 1)
  })
  return [...ratioMap].reduce((acc, cur) => acc + getNc2(cur[1]), 0)
}
