// https://leetcode.com/problems/binary-tree-level-order-traversal-ii
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 36.3 MB, less than 100.00% of Java online submissions for Binary Tree Level Order Traversal II.

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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new ArrayList<List<Integer>>();
        helper(root, 1, result);
        return result;
    }
    private void helper(TreeNode node, int level, List<List<Integer>> result) {
        if (node == null) return;
        if (result.size() < level) {
            result.add(0, new ArrayList());
        }
        
        List<Integer> arr = result.get(result.size() - level);
        arr.add(node.val);
        
        helper(node.left, level+1, result);
        helper(node.right, level+1, result);
    }
}