// https://leetcode.com/problems/all-possible-full-binary-trees
// Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for All Possible Full Binary Trees.
// Memory Usage: 45.1 MB, less than 100.00% of JavaScript online submissions for All Possible Full Binary Trees.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
const memoizeMap = new Map()
const allPossibleFBT = N => {
  if (memoizeMap.has(N)) {
    return memoizeMap.get(N)
  }
  if (N % 2 === 0) {
    return []
  }
  const resultArr = []
  if (N === 1) {
    resultArr.push(new TreeNode(0))
    return resultArr
  }

  const limit = N - 1
  for (let i = 1; i < limit; i += 2) {
    const leftArr = allPossibleFBT(i)
    const rightArr = allPossibleFBT(limit - i)
    leftArr.map(left => {
      rightArr.map(right => {
        const root = new TreeNode(0)
        root.left = left
        root.right = right
        resultArr.push(root)
      })
    })
  }
  memoizeMap.set(N, resultArr)
  return resultArr
}
