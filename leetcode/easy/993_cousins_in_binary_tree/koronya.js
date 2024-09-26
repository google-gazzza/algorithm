// [Easy] 993. Cousins in Binary Tree
// 993_cousins_in_binary_tree

// https://leetcode.com/problems/cousins-in-binary-tree
// Runtime: 68 ms, faster than 17.78% of JavaScript online submissions for Cousins in Binary Tree.
// Memory Usage: 36.1 MB, less than 12.93% of JavaScript online submissions for Cousins in Binary Tree.
const isCousins = (root, x, y) => {
  let prevLevel = -1
  let prevParentVal = -1
  let returnFlag = false
  let loopFlag = true
  const inOrderTraversal = (node, level, parentVal) => {
    if (node === null || loopFlag === false) {
      return
    }
    const val = node.val
    if (val === x || val === y) {
      if (prevLevel === -1) {
        prevLevel = level
        prevParentVal = parentVal
      } else {
        if (prevLevel === level && prevParentVal !== parentVal) {
          returnFlag = true
        }
        loopFlag = false
      }
    }
    inOrderTraversal(node.left, level + 1, val)
    inOrderTraversal(node.right, level + 1, val)
  }
  inOrderTraversal(root, 0, null)

  return returnFlag
}

// Runtime: 72 ms, faster than 13.48% of JavaScript online submissions for Cousins in Binary Tree.
// Memory Usage: 37.5 MB, less than 5.22% of JavaScript online submissions for Cousins in Binary Tree.
const isCousins2 = (root, x, y) => {
  const nodeInfoMap = new Map()
  const inOrderTraversal = (node, level, parentVal) => {
    if (node === null) {
      return
    }
    const val = node.val
    nodeInfoMap.set(val, {level, parentVal})
    inOrderTraversal(node.left, level + 1, val)
    inOrderTraversal(node.right, level + 1, val)
  }
  inOrderTraversal(root, 0, null)
  nodeInfoX = nodeInfoMap.get(x)
  nodeInfoY = nodeInfoMap.get(y)

  if (nodeInfoX.level === nodeInfoY.level && nodeInfoX.parentVal !== nodeInfoY.parentVal) {
    return true
  }
  return false
}
