// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 36 MB, less than 100.00% of Java online submissions for Binary Tree Level Order Traversal.

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
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        visitTree(root, 1, result);
        return result;
    }
    
    private void visitTree(TreeNode node, int level, List<List<Integer>> result) {
        if (node == null) return;
        if (result.size() < level) {
            result.add(new ArrayList<Integer>());
        }
        
        List<Integer> list = result.get(level-1);
        list.add(node.val);
        
        visitTree(node.left, level+1, result);
        visitTree(node.right, level+1, result);
    }
}