// Runtime: 144 ms, faster than 64.00% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 43.5 MB, less than 50.00% of JavaScript online submissions for Increasing Order Search Tree.
// for 가독성!
const inorderTraversal = root => root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
const increasingBST = root => {
  const inOrderArr = inorderTraversal(root)
  const inOrderArrLen = inOrderArr.length
  const resultRoot = new TreeNode(inOrderArr[0])
  let target = resultRoot
  for (let i = 1; i < inOrderArrLen; i = i + 1 | 0) {
    target.right = new TreeNode(inOrderArr[i])
    target = target.right
  }
  return resultRoot
}

// for 성능!
// Runtime: 128 ms, faster than 93.45% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 42.9 MB, less than 100.00% of JavaScript online submissions for Increasing Order Search Tree.
const inorderTraversal2 = root => {
  if (root == null) {
    return []
  }
  const resultArr = []
  const inorderRecursive = root => {
    if (root.val == null) {
      return  
    }
    if (root.left !== null) {
      inorderRecursive(root.left)
    }
    resultArr.push(root.val)
    if (root.right !== null) {
      inorderRecursive(root.right)
    }
  }
  inorderRecursive(root)
  return resultArr
}
