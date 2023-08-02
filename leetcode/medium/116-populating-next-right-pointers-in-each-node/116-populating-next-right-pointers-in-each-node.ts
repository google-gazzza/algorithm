// leetcode/medium/116. Populating Next Right Pointers in Each Node
// 116-populating-next-right-pointers-in-each-node
// URL: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
    this.next = (next === undefined ? null : next);
  }
}


function connect(root: Node | null): Node | null {
  const originalRoot = root;
  const queue: Node[] = [root];
  const nextQueue: Node[] = [];

  while (queue.length) {
    const node: Node = queue.shift();
    if (node) {
      node.next = queue[0] || null;
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    if (!queue.length) {
      queue.push(...nextQueue);
      nextQueue.length = 0;
    }
  }

  return originalRoot;
}
