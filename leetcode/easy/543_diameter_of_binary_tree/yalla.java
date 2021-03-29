// https://leetcode.com/problems/diameter-of-binary-tree/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Diameter of Binary Tree.
// Memory Usage: 38.6 MB, less than 94.78% of Java online submissions for Diameter of Binary Tree.
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
	int ret = 0;
	public int diameterOfBinaryTree(TreeNode root) {
		bst(root);
		return ret;
	}

	private int bst(TreeNode root){
		if(root == null) return 0;
		int left = bst(root.left);
		int right = bst(root.right);

		ret = Math.max(ret, left + right);
		return Math.max(left, right ) +1;
	}
}