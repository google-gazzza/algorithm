// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 37.4 MB, less than 89.69% of Java online submissions for Convert Sorted Array to Binary Search Tree.

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
    public TreeNode sortedArrayToBST(int[] num) {
        if (num.length == 0) {
            return null;
        }
        return node(num, 0, num.length - 1);
    }

    public TreeNode node(int[] num, int low, int high) {
        if (high < low) {
            return null;
        }
        int mid = (low + high) / 2;
        TreeNode t = new TreeNode(num[mid]);
        t.left = node(num, low, mid -1);
        t.right = node(num, mid +1, high);

        return t;
    }
}
