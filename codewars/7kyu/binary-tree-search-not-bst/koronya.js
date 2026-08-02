// [JS][7kyu] Binary Tree Search (not BST)
// binary-tree-search-not-bst
// https://www.codewars.com/kata/5acc79efc6fde7838a0000a0/train/javascript

// const search = (n, root) => root?.value === n || root?.left?.value === n || root?.right?.value === n
const search = (n, root) => {
  if (root?.value === n) {
    return true
  }
  const numSet = new Set()
  const dfs = (node) => {
    if (!node) {
      return
    }
    numSet.add(node.value)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  return numSet.has(n)
}

// class Node {
//   constructor(value, left = null, right = null) {
//     this.value = value
//     this.left = left
//     this.right = right
//   }
// }

// const root = new Node(666, new Node(555), new Node(444))

// search(444, root)
// search(555, root)
// search(666, root)
// search(777, root)
