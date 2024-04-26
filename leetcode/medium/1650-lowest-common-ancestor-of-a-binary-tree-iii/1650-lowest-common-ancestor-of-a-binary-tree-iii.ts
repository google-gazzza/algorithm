/*
1650-lowest-common-ancestor-of-a-binary-tree-iii
leetcode/medium/1650. Lowest Common Ancestor of a Binary Tree III
Difficulty: medium
URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/

NOTE: Description

NOTE: Constraints
  - The number of nodes in the tree is in the range [2, 105].
  - -109 <= Node.val <= 109
  - All Node.val are unique.
  - p != q
  - p and q exist in the tree.

NOTE: Explanation
*/

class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  parent: Node | null;

  constructor(val?: number, left?: Node | null, right?: Node | null, parent?: Node | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
    this.parent = (parent === undefined ? null : parent);
  }
}

function trackingParentNodes(root: Node | null): Node[] {
  if (root === null) {
    return null;
  }

  const path = [];

  while (root.parent !== null) {
    path.push(root);
    root = root.parent;
  }
  path.push(root);

  return path;
}

function lowestCommonAncestor(p: Node | null, q: Node | null): Node | null {
  let pPath = trackingParentNodes(p).reverse();
  let qPath = trackingParentNodes(q).reverse();

  if (pPath.length < qPath.length) {
    [pPath, qPath] = [qPath, pPath];
  }

  for (let i = 0; i < pPath.length; i += 1) {
    if (pPath[i + 1] !== qPath[i + 1]) {
      return pPath[i];
    }
  }
}

