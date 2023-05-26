// [Medium] 1769. Minimum Number of Operations to Move All Balls to Each Box
// 1769_minimum_number_of_operations_to_move_all_balls_to_each_box

// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box
// Runtime: 332 ms, faster than 100.00% of TypeScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
// Memory Usage: 43 MB, less than 100.00% of TypeScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.

/**
 * @param {string} boxes
 * @return {number[]}
 */
function minOperations(boxes: string): number[] {
  const boxesLen: number = boxes.length
  const resultArr: number[] = []
  for (let i: number = 0; i < boxesLen; i += 1) {
    let count: number = 0
    for (let j: number = 0; j < boxesLen; j += 1) {
      if (boxes[j] === '1' && i !== j) {
        count += Math.abs(j - i)
      }
    }
    resultArr.push(count)
  }

  return resultArr
}

minOperations('110') //?
minOperations('001011') //?
