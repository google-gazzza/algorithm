// [Easy] 2011. Final Value of Variable After Performing Operations
// 2011_final_value_of_variable_after_performing_operations

// https://leetcode.com/problems/final-value-of-variable-after-performing-operations
// Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Final Value of Variable After Performing Operations.
// Memory Usage: 40.6 MB, less than 100.00% of JavaScript online submissions for Final Value of Variable After Performing Operations.

const isPlus = (str) => str[0] === '+' || str[1] === '+'

/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, cur) => (isPlus(cur) === true ? acc + 1 : acc - 1), 0)
}

finalValueAfterOperations(['--X', 'X++', 'X++']) //?
finalValueAfterOperations(['++X', '++X', 'X++']) //?
finalValueAfterOperations(['X++', '++X', '--X', 'X--']) //?
