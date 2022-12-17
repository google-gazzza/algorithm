/*
1506-find-root-of-n-ary-tree
leetcode/medium/1506. Find Root of N-Ary Tree
URL: https://leetcode.com/problems/find-root-of-n-ary-tree/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

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

 function findRoot(tree: Node[]): Node | null {
  const childrenList = tree.map((node) => node.children).flat();
  const root = tree.find((node) => !childrenList.includes(node));

  return root || null;
};
