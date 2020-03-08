// https://leetcode.com/problems/binary-tree-level-order-traversal-ii
// Runtime: 1 ms, faster than 84.09% of Java online submissions for Binary Tree Level Order Traversal II.
// Memory Usage: 35.9 MB, less than 100.00% of Java online submissions for Binary Tree Level Order Traversal II.

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
    public List<List<Integer>> levelOrderBottom(TreeNode r) {
        List<TreeNode> l = new ArrayList<TreeNode>();
        List<List<Integer>> l2 = new ArrayList<List<Integer>>();

        if (r == null) return l2;

        l.add(r);
        while (!l.isEmpty()) {
            int n = l.size();
            List<Integer> tmpList = new ArrayList<Integer>();
            for (int i = 0; i < n; i++) {
                TreeNode firstE = l.get(0);
                if (firstE.left != null) l.add(firstE.left);
                if (firstE.right != null) l.add(firstE.right);
                tmpList.add(firstE.val);
                l.remove(0);
            }

            l2.add(0, tmpList);
        }

        return l2;
    }
}
