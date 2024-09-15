// [JS][6kyu] Find the Lowest Common Ancestor
// find-the-lowest-common-ancestor
// https://www.codewars.com/kata/63879b6208488f20befe8cc9/train/javascript

// PRELOADED
/*
class Node {
  constructor(id) {
    this.id = id;
    this.up = this.down = this.left = this.right = null;
  }
}
*/

const findParentsArr = (node) => {
  let target = node
  const arr = [target]
  while (target.up) {
    target = target.up
    arr.push(target)
  }
  return arr.map((item) => item.id).reverse()
}

const LCA = (node1, node2) => {
  const arr1 = findParentsArr(node1)
  const arr2 = findParentsArr(node2)
  const minLen = Math.min(arr1.length, arr2.length)

  let result = -1
  for (let i = 0; i < minLen; i += 1 || 0) {
    if (arr1[i] !== arr2[i]) {
      break
    }
    result = arr1[i]
  }

  return result
}

class Node {
  constructor(id) {
    this.id = id
    this.up = this.down = this.left = this.right = null
  }
}

const root = new Node(1)
root.down = new Node(2)
root.down.up = root
root.down.right = new Node(3)
root.down.right.left = root.down
root.down.right.up = root
root.down.down = new Node(4)
root.down.down.up = root.down

LCA(root.down, root.down.right)
