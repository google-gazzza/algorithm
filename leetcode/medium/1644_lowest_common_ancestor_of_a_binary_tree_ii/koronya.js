// [Medium] 1644. Lowest Common Ancestor of a Binary Tree II
// 1644_lowest_common_ancestor_of_a_binary_tree_ii

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii
// Runtime: 176 ms, faster than 76.29% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree II.
// Memory Usage: 58.2 MB, less than 70.10% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree II.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const lowestCommonAncestor = function (root, p, q) {
  let countP = 0
  let countQ = 0
  const dfs = (node, p, q) => {
    if (node == null) {
      return null
    }
    const nodeVal = node.val
    const l = dfs(node.left, p, q)
    const r = dfs(node.right, p, q)
    if (p != null && nodeVal === p.val) {
      countP += 1
      return node
    }
    if (q != null && nodeVal === q.val) {
      countQ += 1
      return node
    }
    if (l && r) {
      return node
    }
    return l || r
  }

  const result = dfs(root, p, q)
  if (countP === 0 || countQ === 0) {
    return null
  }
  return result
}

// 아래의 방법들은 out of memory...

const getLastCommonAncestorNode = (arr1, arr2) => {
  const minLen = Math.min(arr1.length, arr2.length)
  for (let i = minLen - 1; i >= 0; i -= 1 || 0) {
    if (arr1[i] === arr2[i]) {
      return arr1[i]
    }
  }
}

const lowestCommonAncestor3 = function (root, p, q) {
  const nodeMap = new Map()
  const preOrderTraversal = (node, arr = []) => {
    if (node == null) {
      return
    }
    const nodeVal = node.val
    const newArr = [...arr, nodeVal]
    nodeMap.set(nodeVal, [node, newArr])
    preOrderTraversal(node.left, newArr)
    preOrderTraversal(node.right, newArr)
  }

  preOrderTraversal(root)

  if (p == null || q == null || nodeMap.has(p.val) === false || nodeMap.has(q.val) === false) {
    return null
  }
  return nodeMap.get(getLastCommonAncestorNode(nodeMap.get(p.val)[1], nodeMap.get(q.val)[1]))[0]
}

const lowestCommonAncestor2 = function (root, p, q) {
  const nodeMap = new Map()
  const preOrderTraversal = (node, arr = []) => {
    if (node == null) {
      return
    }
    const newArr = [...arr, node]
    nodeMap.set(node, newArr)
    preOrderTraversal(node.left, newArr)
    preOrderTraversal(node.right, newArr)
  }

  preOrderTraversal(root)

  if (nodeMap.has(p) === false || nodeMap.has(q) === false) {
    return null
  }

  return getLastCommonAncestorNode(nodeMap.get(p), nodeMap.get(q))
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

// const node5 = new TreeNode(5)
// const node1 = new TreeNode(1)
// const root = new TreeNode(3)
// root.left = node5
// root.right = node1
// root.left.left = new TreeNode(6)
// root.left.right = new TreeNode(2)
// root.right.left = new TreeNode(0)
// root.right.right = new TreeNode(8)
// root.right.left.left = new TreeNode(7)
// root.right.left.right = new TreeNode(4)

const node5 = new TreeNode(5)
const node1 = new TreeNode(1)
const root = new TreeNode(3)
root.left = node5
root.right = node1
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)

root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

lowestCommonAncestor(root, node5, node1) //?
