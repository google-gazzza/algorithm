// [Easy] 744. Find Smallest Letter Greater Than Target
// 744_find_smallest_letter_greater_than_target

// https://leetcode.com/problems/find-smallest-letter-greater-than-target
// Runtime: 92 ms, faster than 50.00% of TypeScript online submissions for Find Smallest Letter Greater Than Target.
// Memory Usage: 40.9 MB, less than 33.33% of TypeScript online submissions for Find Smallest Letter Greater Than Target.
function nextGreatestLetter (letters: string[], target: string): string {
  letters.sort((a: string, b: string): number => a.charCodeAt(0) - b.charCodeAt(0))
  const charCodeOfTarget: number = target.charCodeAt(0)
  const nextLetter: string | undefined = letters.find(letter => letter.charCodeAt(0) > charCodeOfTarget)

  return nextLetter || letters[0]
}
