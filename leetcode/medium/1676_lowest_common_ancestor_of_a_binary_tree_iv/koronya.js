// [Medium] 1676. Lowest Common Ancestor of a Binary Tree IV
// 1676_lowest_common_ancestor_of_a_binary_tree_iv

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv
// Runtime: 776 ms, faster than 5.13% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree IV.
// Memory Usage: 55.4 MB, less than 46.15% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree IV.

const lowestCommonAncestor = function (root, nodes) {
  const countArr = nodes.map((_) => 0)
  const countArrLen = countArr.length
  const dfs = (node, nodes) => {
    if (node == null) {
      return null
    }
    const nodeVal = node.val
    const l = dfs(node.left, nodes)
    const r = dfs(node.right, nodes)
    if (nodes.some((item) => item == null)) {
      return null
    }

    for (let i = 0; i < countArrLen; i += 1 || 0) {
      if (nodeVal === nodes[i].val) {
        countArr[i] += 1
        return node
      }
    }
    if (l && r) {
      return node
    }
    return l || r
  }

  const result = dfs(root, nodes)
  if (countArr.some((count) => count === 0) === true) {
    return null
  }

  return result
}

// 아래의 방법들은 out of memory

const getLastCommonAncestorNode = (arr) => {
  const lenArr = arr.map((item) => item.length)
  const minLen = Math.min(...lenArr)
  for (let i = minLen - 1; i >= 0; i -= 1 || 0) {
    const temp = arr[0][i]
    if (arr.every((item) => item[i] === temp) === true) {
      return temp
    }
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
const lowestCommonAncestor2 = function (root, nodes) {
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

  return getLastCommonAncestorNode(nodes.map((node) => nodeMap.get(node)))
}

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

const node0 = new TreeNode(0)
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
const node8 = new TreeNode(8)

const root = node3
root.left = node5
root.right = node1
node5.left = node6
node5.right = node2
node2.left = node7
node2.right = node4
node1.left = node0
node1.right = node8

// lowestCommonAncestor(root, [node4, node7]) //?
// lowestCommonAncestor(root, [node4, node7, node2]) //?
lowestCommonAncestor(root, [node1]) //?
