// [Medium] 1490. Clone N-ary Tree
// 1490_clone_n-ary_tree

// https://leetcode.com/problems/clone-n-ary-tree
// Runtime: 120 ms, faster than 45.95% of JavaScript online submissions for Clone N-ary Tree.
// Memory Usage: 49.5 MB, less than 13.51% of JavaScript online submissions for Clone N-ary Tree.

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

const map = new Map()

/**
* @param {Node|null} node
* @return {Node|null}
*/
const cloneTree = function (root) {
  const dfs = (node) => {
    if (node == null) {
      return null
    }
    if (map.has(node) === true) {
      return map.get(node)
    }
    map.set(node, new Node(node.val))
    node.children.forEach((child) => {
      map.get(node).children.push(dfs(child))
    })
    return map.get(node)
  }

  return dfs(root)
}

function Node(val, children) {
  this.val = val === undefined ? 0 : val
  this.children = children === undefined ? [] : children
}

const root = new Node(1)
root.children = [new Node(3), new Node(2), new Node(4)]
root.children[0].children = [new Node(5), new Node(6)]

cloneTree(root) //?
