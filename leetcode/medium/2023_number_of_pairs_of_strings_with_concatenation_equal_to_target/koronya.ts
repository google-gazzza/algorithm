// [Medium] 2023. Number of Pairs of Strings With Concatenation Equal to Target
// 2023_number_of_pairs_of_strings_with_concatenation_equal_to_target

// https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target
// Runtime: 68 ms, faster than 100.00% of TypeScript online submissions for Number of Pairs of Strings With Concatenation Equal to Target.
// Memory Usage: 49.3 MB, less than 16.67% of TypeScript online submissions for Number of Pairs of Strings With Concatenation Equal to Target.

function numOfPairs(nums: string[], target: string): number {
  let count: number = 0
  const numsLen = nums.length
  const dfs = (selfIndex: number) => {
    const strA = nums[selfIndex]
    if (target.startsWith(strA) === true) {
      for (let i: number = 0; i < numsLen; i += 1) {
        if (i !== selfIndex && strA + nums[i] === target) {
          count += 1
        }
      }
    }
  }
  for (let i: number = 0; i < numsLen; i += 1) {
    dfs(i)
  }

  return count
}
