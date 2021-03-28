// https://leetcode.com/problems/invert-binary-tree/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Invert Binary Tree.
// Memory Usage: 36.5 MB, less than 44.79% of Java online submissions for Invert Binary Tree.
class Solution {
	public TreeNode invertTree(TreeNode root) {
		invert(root);
		return root;
	}

	private void invert(TreeNode root){
		if(root == null) return;
		TreeNode temp = root.left;
		root.left = root.right;
		root.right = temp;

		invert(root.left);
		invert(root.right);
	}
}