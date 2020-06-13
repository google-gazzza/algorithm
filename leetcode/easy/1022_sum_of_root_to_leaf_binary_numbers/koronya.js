// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers
// Runtime: 76 ms, faster than 30.26% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
// Memory Usage: 38.7 MB, less than 6.41% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.ers.
const sumRootToLeaf = root => {
  const leafNodes = []
  const dfs = (prevStr, node) => {
    if (node === null) {
      return
    }
    prevStr += node.val
    if (node.left === null && node.right === null) {
      leafNodes.push(prevStr)
    } else {
      dfs(prevStr, node.left)
      dfs(prevStr, node.right)
    }
  }
  dfs('', root)

  return leafNodes.reduce((acc, cur) => acc + parseInt(cur, 2), 0)
}
