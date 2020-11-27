// [Easy] 744. Find Smallest Letter Greater Than Target
// 744_find_smallest_letter_greater_than_target

// https://leetcode.com/problems/find-smallest-letter-greater-than-target
// Runtime: 80 ms, faster than 85.60% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
// Memory Usage: 40.1 MB, less than 98.44% of JavaScript online submissions for Find Smallest Letter Greater Than Target.
const nextGreatestLetter = function (letters, target) {
  letters.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
  const charCodeOfTarget = target.charCodeAt(0)
  const nextLetter = letters.find(letter => letter.charCodeAt(0) > charCodeOfTarget)

  return nextLetter || letters[0]
}
