// https://leetcode.com/problems/find-bottom-left-tree-value
// Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Find Bottom Left Tree Value.
// Memory Usage: 38.5 MB, less than 20.00% of JavaScript online submissions for Find Bottom Left Tree Value.

const findBottomLeftValue = root => {
  const levelMap = new Map()
  const preOrder = (root, level = 0) => {
    if (root == null) {
      return
    }
    const val = root.val
    if (levelMap.has(level)) {
      levelMap.get(level).push(val)
    } else {
      levelMap.set(level, [val])
    }
    preOrder(root.left, level + 1)
    preOrder(root.right, level + 1)
  }
  preOrder(root)

  const levelArr = [...levelMap]
  const lastRow = levelArr[levelArr.length - 1]
  const [levelKey, levelValArr] = lastRow
  return levelValArr[0]
}
