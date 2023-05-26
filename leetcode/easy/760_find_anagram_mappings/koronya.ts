// [Easy] 760. Find Anagram Mappings
// 760_find_anagram_mappings

// https://leetcode.com/problems/find-anagram-mappings
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Find Anagram Mappings.
// Memory Usage: 40.6 MB, less than 50.00% of TypeScript online submissions for Find Anagram Mappings.

function anagramMappings(nums1: number[], nums2: number[]): number[] {
  return nums1.map((num) => nums2.indexOf(num))
}

anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]) //?
