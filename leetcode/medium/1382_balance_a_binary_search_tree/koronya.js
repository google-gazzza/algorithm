// https://leetcode.com/problems/balance-a-binary-search-tree/
// Runtime: 196 ms, faster than 10.33% of JavaScript online submissions for Balance a Binary Search Tree.
// Memory Usage: 62.3 MB, less than 100.00% of JavaScript online submissions for Balance a Binary Search Tree.

const preOrderTraversal = root => {
  if (root == null) {
    return []
  }
  const arr = [root.val]
  arr.push(...preOrderTraversal(root.left))
  arr.push(...preOrderTraversal(root.right))

  return arr
}

const balanceBST = root => {
  let arr = preOrderTraversal(root)
  arr.sort((a, b) => a - b)
  const arrToBST = sortedArr => {
    const sortedArrLen = sortedArr.length
    if (sortedArrLen === 0) {
      return null
    }
    const mid = Math.floor(sortedArrLen / 2)
    const root = new TreeNode(sortedArr[mid])
    root.left = arrToBST(sortedArr.slice(0, mid))
    root.right = arrToBST(sortedArr.slice(mid + 1, sortedArrLen))

    return root
  }

  return arrToBST(arr)
}
