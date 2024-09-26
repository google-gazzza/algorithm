// [Medium] 450. Delete Node in a BST
// 450_delete_node_in_a_bst

// https://leetcode.com/problems/delete-node-in-a-bst
// Runtime: 112 ms, faster than 63.92% of JavaScript online submissions for Delete Node in a BST.
// Memory Usage: 45.6 MB, less than 25.09% of JavaScript online submissions for Delete Node in a BST.
const getNextValue = node => {
  let target = node.right
  while (target.left !== null) {
    target = target.left
  }
  return target.val
}

const getPrevValue = node => {
  let target = node.left
  while (target.right !== null) {
    target = target.right
  }
  return target.val
}

const deleteNode = (root, key) => {
  if (root === null) {
    return null
  }
  const rootVal = root.val
  if (rootVal === key) {
    if (root.left !== null) {
      const prevVal = getPrevValue(root)
      root.val = prevVal
      root.left = deleteNode(root.left, prevVal)
    } else if (root.right !== null) {
      const nextVal = getNextValue(root)
      root.val = nextVal
      root.right = deleteNode(root.right, nextVal)
    } else {
      return null
    }
  } else if (rootVal < key) {
    root.right = deleteNode(root.right, key)
  } else {
    root.left = deleteNode(root.left, key)
  }

  return root
}
