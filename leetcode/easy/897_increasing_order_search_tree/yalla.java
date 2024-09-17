// https://leetcode.com/problems/increasing-order-search-tree/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Increasing Order Search Tree.
// Memory Usage: 36.7 MB, less than 16.83% of Java online submissions for Increasing Order Search Tree.
class Solution {
	TreeNode current;
	public TreeNode increasingBST(TreeNode root) {
		if(root == null) return root;
		TreeNode ret = new TreeNode(0);
		current = ret;
		inorder(root);
		return ret.right;
	}


	private void inorder(TreeNode root){
		if(root == null) return;
		inorder(root.left);
		root.left = null;
		current.right = root;
		current = root;
		inorder(root.right);
	}

}
