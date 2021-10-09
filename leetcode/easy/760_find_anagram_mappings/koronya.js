// [Easy] 760. Find Anagram Mappings
// 760_find_anagram_mappings

// https://leetcode.com/problems/find-anagram-mappings
// Runtime: 68 ms, faster than 92.08% of JavaScript online submissions for Find Anagram Mappings.
// Memory Usage: 38.7 MB, less than 71.29% of JavaScript online submissions for Find Anagram Mappings.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const anagramMappings = function (nums1, nums2) {
  return nums1.map((num) => nums2.indexOf(num))
}

anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]) //?
