// [Medium] 1769. Minimum Number of Operations to Move All Balls to Each Box
// 1769_minimum_number_of_operations_to_move_all_balls_to_each_box

// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box
// Runtime: 332 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
// Memory Usage: 42.1 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.

/**
 * @param {string} boxes
 * @return {number[]}
 */
 const minOperations = function (boxes) {
  const boxesLen = boxes.length
  const resultArr = []
  for (let i = 0; i < boxesLen; i += 1 || 0) {
    let count = 0
    for (let j = 0; j < boxesLen; j += 1 || 0) {
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
