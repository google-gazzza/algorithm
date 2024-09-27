// [Medium] 103. Binary Tree Zigzag Level Order Traversal
// 103_binary_tree_zigzag_level_order_traversal

// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
// Runtime: 64 ms, faster than 90.88% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
// Memory Usage: 35.8 MB, less than 6.14% of JavaScript online submissions for Binary Tree Zigzag Level Order Traversal.
const zigzagLevelOrder = root => {
  const resultArr = []
  const resultMap = new Map()
  const setMap = (value, level) => {
    let levelArr
    if (resultMap.has(level)) {
      levelArr = resultMap.get(level)
    } else {
      levelArr = []
      resultMap.set(level, levelArr)
    }
    if (level % 2 === 0) {
      levelArr.push(value)
    } else {
      levelArr.unshift(value)
    }
  }

  const preOrder = (node, level = 0) => {
    if (node === null) {
      return
    }
    setMap(node.val, level)
    level += 1
    preOrder(node.left, level)
    preOrder(node.right, level)
  }
  preOrder(root)

  for (const result of resultMap) {
    resultArr.push(result[1])
  }
  return resultArr
}
