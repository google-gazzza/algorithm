// [Medium] 314. Binary Tree Vertical Order Traversal
// 314_binary_tree_vertical_order_traversal

// https://leetcode.com/problems/binary-tree-vertical-order-traversal
// Runtime: 81 ms, faster than 77.45% of TypeScript online submissions for Binary Tree Vertical Order Traversal.
// Memory Usage: 44.7 MB, less than 74.51% of TypeScript online submissions for Binary Tree Vertical Order Traversal.


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface IObj {
  val: number
  level: number
}

type TreeNodeOrNull = TreeNode | null

function verticalOrder(root: TreeNodeOrNull): number[][] {
  let min = Number.MAX_SAFE_INTEGER
  let max = Number.MIN_SAFE_INTEGER
  const numMap = new Map<number, IObj[]>()
  const inOrderTraversal = (node: TreeNodeOrNull, index: number = 0, level: number = 0) => {
    if (node == null) {
      return
    }
    min = Math.min(min, index)
    max = Math.max(max, index)
    const val = node.val
    if (numMap.has(index) === true) {
      numMap.get(index)!.push({ val, level })
    } else {
      numMap.set(index, [{ val, level }])
    }
    level += 1
    inOrderTraversal(node.left, index - 1, level)
    inOrderTraversal(node.right, index + 1, level)
  }
  inOrderTraversal(root)
  const resultArr = []
  for (let i: number = min; i <= max; i += 1) {
    resultArr.push(
      numMap
        .get(i)
        .sort((a, b) => a.level - b.level)
        .map((item) => item.val),
    )
  }

  return resultArr
}
