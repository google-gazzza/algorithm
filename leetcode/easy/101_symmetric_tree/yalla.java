// https://leetcode.com/problems/symmetric-tree
// Runtime: 1 ms, faster than 23.59% of Java online submissions for Symmetric Tree.
// Memory Usage: 39.7 MB, less than 26.53% of Java online submissions for Symmetric Tree.

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
    public boolean isSymmetric(TreeNode root) {
        if(root == null){
            return true;
        }

        Stack<TreeNode> stack = new Stack<>();
        stack.add(root.left);
        stack.add(root.right);

        while(!stack.isEmpty()){
            TreeNode treeNode1 = stack.pop();
            TreeNode treeNode2 = stack.pop();

            if(treeNode1 == null && treeNode2 == null){
                continue;
            }
            if(treeNode1 == null || treeNode2 == null || treeNode1.val != treeNode2.val){
                return false;
            }

            stack.push(treeNode1.left);
            stack.push(treeNode2.right);
            stack.push(treeNode1.right);
            stack.push(treeNode2.left);
        }
        return true;
    }
}