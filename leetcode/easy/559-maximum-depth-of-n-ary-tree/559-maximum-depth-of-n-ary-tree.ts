/*
559-maximum-depth-of-n-ary-tree
leetcode/easy/559. Maximum Depth of N-ary Tree
URL: https://leetcode.com/problems/find-and-replace-in-string/

NOTE: Description
NOTE: Constraints
  - The total number of nodes is in the range [0, 104].
  - The depth of the n-ary tree is less than or equal to 1000.

NOTE: Explanation
NOTE: Reference
*/

// Definition for Node.
// @ts-ignore
class Node {
  val: number;
  children: Node[];

  constructor(val?: number, children?: Node[]) {
    this.val = (val === undefined ? 0 : val);
    this.children = (children === undefined ? [] : children);
  }
}

function depthFirstSearch(root: Node, depth: number): number {
  if (root === null) {
    return depth;
  }

  const result: number[] = [0];

  root.children.forEach((child) => {
    result.push(depthFirstSearch(child, depth));
  });

  return Math.max(...result) + 1;
}

function maxDepth(root: Node | null): number {
  return depthFirstSearch(root, 0);
}
