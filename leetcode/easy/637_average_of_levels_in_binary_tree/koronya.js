// [Easy] 637. Average of Levels in Binary Tree
// 637_average_of_levels_in_binary_tree

// https://leetcode.com/problems/average-of-levels-in-binary-tree
// Runtime: 80 ms, faster than 97.90% of JavaScript online submissions for Average of Levels in Binary Tree.
// Memory Usage: 42.5 MB, less than 17.30% of JavaScript online submissions for Average of Levels in Binary Tree.
const averageOfLevels = root => {
  const levelMap = new Map()
  const dfs = (node, level = 0) => {
    if (node === null) {
      return
    }
    if (levelMap.has(level)) {
      levelMap.get(level).push(node.val)
    } else {
      levelMap.set(level, [node.val])
    }
    level += 1
    dfs(node.left, level)
    dfs(node.right, level)
  }
  dfs(root)

  return [...levelMap].map(item => {
    const arr = item[1]
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
  })
}
