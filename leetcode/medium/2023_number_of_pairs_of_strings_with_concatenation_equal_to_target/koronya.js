// [Medium] 2023. Number of Pairs of Strings With Concatenation Equal to Target
// 2023_number_of_pairs_of_strings_with_concatenation_equal_to_target

// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target
// Runtime: 76 ms, faster than 93.00% of JavaScript online submissions for Number of Pairs of Strings With Concatenation Equal to Target.
// Memory Usage: 48.5 MB, less than 7.00% of JavaScript online submissions for Number of Pairs of Strings With Concatenation Equal to Target.

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
const numOfPairs = function (nums, target) {
  let count = 0
  const numsLen = nums.length
  const dfs = (selfIndex) => {
    const strA = nums[selfIndex]
    if (target.startsWith(strA) === true) {
      for (let i = 0; i < numsLen; i += 1 || 0) {
        if (i !== selfIndex && strA + nums[i] === target) {
          count += 1
        }
      }
    }
  }
  for (let i = 0; i < numsLen; i += 1 || 0) {
    dfs(i)
  }

  return count
}

numOfPairs(['777', '7', '77', '77'], '7777')
numOfPairs(['123', '4', '12', '34'], '1234')
numOfPairs(['1', '1', '1'], '11')
