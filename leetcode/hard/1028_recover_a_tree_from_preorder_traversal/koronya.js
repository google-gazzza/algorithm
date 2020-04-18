// https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Recover a Tree From Preorder Traversal.
// Memory Usage: 38.3 MB, less than 100.00% of JavaScript online submissions for Recover a Tree From Preorder Traversal.
const getInfoArr = S => {
  const SLen = S.length
  const infoArr = []
  let cumulativeStr = ''
  let prevStr = ''
  let level = 0
  for (let i = 0; i < SLen; i = i + 1 | 0) {
    const val = S[i]
    if (val !== '-') {
      cumulativeStr += val
    } else {
      if (prevStr === '-') {
        level += 1
      } else {
        infoArr.push({level, val: cumulativeStr})
        cumulativeStr = ''
        level = 1
      }
    }
    prevStr = val
  }
  infoArr.push({level, val: cumulativeStr})

  return infoArr
}

const recoverFromPreorder = S => {
  const infoArr = getInfoArr(S)
  const root = new TreeNode(infoArr.shift().val)
  let prevLevel = 0
  const tempStack = [root]
  infoArr.map(item => {
    const {level, val} = item
    if (level > prevLevel) {
      const parent = tempStack[tempStack.length - 1]
      const node = new TreeNode(val)
      parent.left = node
      tempStack.push(node)
    } else {
      const diff = prevLevel - level
      for (let i = 0; i < diff + 1; i = i + 1 | 0) {
        tempStack.pop()
      }
      const parent = tempStack[tempStack.length - 1]
      const node = new TreeNode(val)
      parent.right = node
      tempStack.push(node)
    }
    prevLevel = level
  })

  return root
}
