// https://leetcode.com/problems/next-greater-element-i
// Runtime: 84 ms, faster than 24.74% of JavaScript online submissions for Next Greater Element I.
// Memory Usage: 36.1 MB, less than 49.91% of JavaScript online submissions for Next Greater Element I.
const nextGreaterElement = (nums1, nums2) => {
  const nums2Len = nums2.length
  return nums1.map(num1 => {
    const matchIndex = nums2.findIndex(num2 => num1 === num2)
    for (let i = matchIndex + 1; i < nums2Len; i = i + 1 | 0) {
      const num = nums2[i]
      if (num1 < num) {
        return num
      }
    }
    return -1
  })
}
