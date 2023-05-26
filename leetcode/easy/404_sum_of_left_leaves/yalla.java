// https://leetcode.com/problems/sum-of-left-leaves/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Sum of Left Leaves.
// Memory Usage: 36.6 MB, less than 88.16% of Java online submissions for Sum of Left Leaves.

// 자식이 없는 왼쪽 노드들의 합
// left, right traverse
// 자식이 없고, 왼쪽 노드면 합
class Solution {
	int sum = 0;
	public int sumOfLeftLeaves(TreeNode root) {
		traverse(root);
		return sum;
	}

	private boolean traverse(TreeNode root) {
		if(root == null) return false;

		//left
		if(root.left != null){
			if(traverse(root.left)){
				sum += root.left.val;
				traverse(root.left);
			}
		}

		//right
		if(root.right != null){
			traverse(root.right);
		}

		return root.left == null && root.right == null;
	}
}