//https://leetcode.com/problems/binary-tree-inorder-traversal
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Tree Inorder Traversal.
//Memory Usage: 39.4 MB, less than 5.11% of Java online submissions for Binary Tree Inorder Traversal.
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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> path = new ArrayList<Integer>();
        traver(path, root);
        return path;
    }

    private void traver(List path, TreeNode n) {
        if (n == null) return;

        traver(path, n.left);
        path.add(n.val);
        traver(path, n.right);
    }
}