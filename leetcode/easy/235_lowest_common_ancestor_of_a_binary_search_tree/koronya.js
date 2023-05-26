// [Easy] 235. Lowest Common Ancestor of a Binary Search Tree
// 235_lowest_common_ancestor_of_a_binary_search_tree

const getCommonAncestor = (p, q) => {
  const pLen = p.length
  const qLen = q.length
  const minLen = pLen < qLen ? pLen : qLen
  let commonAncestor = p[0]
  for (let i = 1; i < minLen; i = i + 1 | 0) {
    if (p[i] !== q[i]) {
      break
    } else {
      commonAncestor = p[i]
    }
  }

  return commonAncestor
}

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree
// Runtime: 80 ms, faster than 97.11% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 45.9 MB, less than 62.84% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
const lowestCommonAncestor = (root, p, q) => {
  const valP = p.val
  const valQ = q.val
  let findQ = false
  let stackQ
  const resultArr = []
  const find = (node, findVal, stack = []) => {
    if (node === null) {
      return
    }
    const newStack = [...stack, node]
    const nodeVal = node.val
    if (findQ === false && nodeVal === valQ) {
      stackQ = newStack
    } 
    if (nodeVal === findVal) {
      resultArr.push(newStack)
    } else {
      if (findVal < nodeVal) {
        find(node.left, findVal, newStack)
      } else {
        find(node.right, findVal, newStack)
      }
    }
  }
  find(root, valP)
  if (findQ === false) {
    find(root, valQ)
  }

  return getCommonAncestor(resultArr[0], resultArr[1] || stackQ)
}

// Runtime: 156 ms, faster than 5.18% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 45.5 MB, less than 88.14% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
const lowestCommonAncestor2 = (root, p, q) => {
  const valP = p.val
  const valQ = q.val
  const resultArr = []
  const find = (node, findVal, stack = []) => {
    if (node === null) {
      return
    }
    const newStack = [...stack, node]
    const nodeVal = node.val
    if (nodeVal === findVal) {
      resultArr.push(newStack)
    } else {
      if (findVal < nodeVal) {
        find(node.left, findVal, newStack)
      } else {
        find(node.right, findVal, newStack)
      }
    }
  }
  find(root, valP)
  find(root, valQ)

  return getCommonAncestor(resultArr[0], resultArr[1])
}

// Runtime: 92 ms, faster than 70.23% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
// Memory Usage: 46.9 MB, less than 5.14% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
const lowestCommonAncestor3 = (root, p, q) => {
  if (root === null || root === p || root === q) {
    return root
  }
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  return left && right
    ? root
    : left || right
}
