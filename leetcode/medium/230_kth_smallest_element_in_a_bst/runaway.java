// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Runtime: 1 ms, faster than 57.15% of Java online submissions for Kth Smallest Element in a BST.
// Memory Usage: 47.1 MB, less than 5.51% of Java online submissions for Kth Smallest Element in a BST.

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public int kthSmallest(TreeNode root, int k) {
        TreeNode node = root;
        Stack<TreeNode> stack = new Stack<TreeNode>();
        int count = 0;
        
        while (true) {
            while (node != null) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            count++;
            if (count == k)
                return node.val;
            node = node.right;
        }
    }
}