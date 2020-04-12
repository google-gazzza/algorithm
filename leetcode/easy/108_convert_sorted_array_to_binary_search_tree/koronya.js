// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
// Runtime: 56 ms, faster than 98.53% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 37.8 MB, less than 23.08% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
const sortedArrayToBST = nums => {
  const numsLen = nums.length
  if (numsLen === 0) {
    return null
  }
  if (numsLen === 1) {
    return new TreeNode(nums[0])
  }

  const centerIndex = Math.floor(numsLen / 2)
  const root = new TreeNode(nums[centerIndex])
  root.left = sortedArrayToBST(nums.slice(0, centerIndex))
  root.right = sortedArrayToBST(nums.slice(centerIndex + 1))
  return root
}
