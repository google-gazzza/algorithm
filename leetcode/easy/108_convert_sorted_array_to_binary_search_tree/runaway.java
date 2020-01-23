// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Convert Sorted Array to Binary Search Tree.
// Memory Usage: 36.9 MB, less than 100.00% of Java online submissions for Convert Sorted Array to Binary Search Tree.

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
    public TreeNode sortedArrayToBST(int[] nums) {
        return createTree(nums, 0, nums.length-1);
    }

    private TreeNode createTree(int[] nums, int start, int end) {
        if (start > end) return null;
        
        int mid = start + (end-start)/2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = createTree(nums, start, mid-1);
        node.right = createTree(nums, mid+1, end);
        return node;
    }
}