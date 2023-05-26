// [Medium] 1490. Clone N-ary Tree
// 1490_clone_n-ary_tree

// https://leetcode.com/problems/clone-n-ary-tree
// Runtime: 124 ms, faster than 100.00% of TypeScript online submissions for Clone N-ary Tree.
// Memory Usage: 51.4 MB, less than 100.00% of TypeScript online submissions for Clone N-ary Tree.

const map = new Map<Node, Node>()

/**
* Definition for Node.
* class Node {
*     val: number
*     children: Node[]
*     constructor(val?: number, children?: Node[]) {
*         this.val = (val===undefined ? 0 : val)
*         this.children = (children===undefined ? [] : children)
*     }
* }
*/

function cloneTree(root: Node | null): Node | null {
  const dfs = (node: Node | null): Node | null => {
    if (node == null) {
      return null
    }
    if (map.has(node) === true) {
      return map.get(node)!
    }
    map.set(node, new Node(node.val))
    node.children.forEach((child) => {
      map.get(node).children.push(dfs(child))
    })
    return map.get(node)
  }

  return dfs(root)
}
