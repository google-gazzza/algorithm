// [Easy] 1876. Substrings of Size Three with Distinct Characters
// 1876_substrings_of_size_three_with_distinct_characters

// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Substrings of Size Three with Distinct Characters.
// Memory Usage: 41.4 MB, less than 30.77% of TypeScript online submissions for Substrings of Size Three with Distinct Characters.

const isGoodStr = (str: string): boolean => str[0] !== str[1] && str[1] !== str[2] && str[2] !== str[0]

function countGoodSubstrings(s: string): number {
  const sLen: number = s.length
  let count: number = 0
  for (let i: number = 0; i < sLen - 2; i += 1) {
    const substr: string = s.substring(i, i + 3)
    if (isGoodStr(substr) === true) {
      count += 1
    }
  }
  return count
}

countGoodSubstrings('xy') //?
countGoodSubstrings('xyzzaz') //?
countGoodSubstrings('aababcabc') //?
