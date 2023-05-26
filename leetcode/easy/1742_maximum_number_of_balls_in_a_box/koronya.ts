// [Easy] 1742. Maximum Number of Balls in a Box
// 1742_maximum_number_of_balls_in_a_box

// https://leetcode.com/problems/maximum-number-of-balls-in-a-box
// Runtime: 220 ms, faster than 50.00% of TypeScript online submissions for Maximum Number of Balls in a Box.
// Memory Usage: 53.6 MB, less than 50.00% of TypeScript online submissions for Maximum Number of Balls in a Box.

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
function countBalls(lowLimit: number, highLimit: number): number {
  const numMap = new Map<number, number>()
  for (let num: number = lowLimit; num <= highLimit; num += 1) {
    const sum: number = num
      .toString()
      .split('')
      .reduce((acc: number, cur: string): number => acc + Number(cur), 0)
    numMap.set(sum, (numMap.get(sum) || 0) + 1)
  }

  return [...numMap].sort((a, b) => b[1] - a[1])[0][1]
}

countBalls(1, 10) //?
countBalls(5, 15) //?
countBalls(19, 28) //?
