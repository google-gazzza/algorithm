//https://leetcode.com/problems/univalued-binary-tree/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Univalued Binary Tree.
//Memory Usage: 37.2 MB, less than 5.55% of Java online submissions for Univalued Binary Tree.

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
    int num = -1;
    public boolean isUnivalTree(TreeNode root) {
        if(root == null) return true;
        if(num == -1){
            num = root.val;
        }
        return num == root.val && isUnivalTree(root.left) && isUnivalTree(root.right);
    }

}