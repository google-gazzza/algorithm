// [Easy] 1018. Binary Prefix Divisible By 5
// 1018_binary_prefix_divisible_by_5

// https://leetcode.com/problems/binary-prefix-divisible-by-5
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Binary Prefix Divisible By 5.
// Memory Usage: 42.7 MB, less than 50.00% of TypeScript online submissions for Binary Prefix Divisible By 5.

function prefixesDivBy5(A: number[]): boolean[] {
  let before: number = 0
  return A.map((item) => {
    before = (before * 2 + item) % 5
    return before % 5 === 0 ? true : false
  })
}

// prefixesDivBy5([0, 1, 1]) //?
// prefixesDivBy5([1, 1, 1]) //?
// prefixesDivBy5([0, 1, 1, 1, 1, 1]) //?
// prefixesDivBy5([1, 1, 1, 0, 1]) //?
// prefixesDivBy5([1, 1, 1, 0, 1, 0, 0, 1]) //?
