//https://leetcode.com/problems/validate-binary-search-tree
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Validate Binary Search Tree.
//Memory Usage: 39.1 MB, less than 81.40% of Java online submissions for Validate Binary Search Tree.
class Solution {
    public boolean isValidBST(TreeNode root) {
        // Long.MIN_VALUE 와 Long.MAX_VALUE 로 시작값을 초기화한다.
        return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean isValidBST(TreeNode root, long minVal, long maxVal) {
        if (root == null) return true;
        // BTS의 조건에 부합하는지 확인한다.
        if (root.val >= maxVal || root.val <= minVal) return false;
        // 하위로 내려가면서 BST의 조건을 탐색한다.
        return isValidBST(root.left, minVal, root.val) && isValidBST(root.right, root.val, maxVal);
    }
}
