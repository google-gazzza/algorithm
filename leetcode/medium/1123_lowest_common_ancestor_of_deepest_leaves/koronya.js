// [Medium] 1123. Lowest Common Ancestor of Deepest Leaves
// 1123_lowest_common_ancestor_of_deepest_leaves

// https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves
// Runtime: 84 ms, faster than 91.73% of JavaScript online submissions for Lowest Common Ancestor of Deepest Leaves.
// Memory Usage: 42.5 MB, less than 27.82% of JavaScript online submissions for Lowest Common Ancestor of Deepest Leaves.
const lcaDeepestLeaves = root => {
  const levelMap = new Map()
  const parentMap = new Map()
  const dfs = (node, parent = null, level = 0) => {
    if (node === null) {
      return
    }
    parentMap.set(node, parent)
    if (!levelMap.has(level)) {
      levelMap.set(level, [node])
    } else {
      levelMap.get(level).push(node)
    }
    dfs(node.left, node, level + 1)
    dfs(node.right, node, level + 1)
  }
  dfs(root)

  const lastLevelInfo = [...levelMap][levelMap.size - 1]
  const deepestLeaves = lastLevelInfo[1]
  if (deepestLeaves.length === 1) {
    return deepestLeaves[0]
  }

  let targets = deepestLeaves
  while (true) {
    const parent = parentMap.get(targets[0])
    if (targets.every(target => parentMap.get(target) === parent)) {
      return parent
    } else {
      targets = targets.map(target => parentMap.get(target))
    }
  }
}
