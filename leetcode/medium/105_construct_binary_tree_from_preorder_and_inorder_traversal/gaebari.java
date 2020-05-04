// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Runtime: 4 ms, faster than 31.82% of Java online submissions for Construct Binary Tree from Preorder and Inorder Traversal.
// Memory Usage: 39.4 MB, less than 14.95% of Java online submissions for Construct Binary Tree from Preorder and Inorder Traversal
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        // 추가적인 매개변수가 필요하므로 함수를 추가로 만들어 주도록 한다.
        return helper(0, 0, inorder.length - 1, preorder, inorder);
    }

    public TreeNode helper(int preStart, int inStart, int inEnd, int[] preorder, int[] inorder) {
        // 재귀가 무한히 돌아가는 것을 방지하는 조건값
        if (preStart > preorder.length - 1 || inStart > inEnd) {
            return null;
        }
        // preStart를 인덱스해서 node 를 생성한다.
        TreeNode root = new TreeNode(preorder[preStart]);
        // inorder를 기준으로 피봇을 만들때 사용하는 초기화 값
        int inIndex = 0;
        // 피봇으로 삼을 기준을 찾는다.
        for (int i = inStart; i <= inEnd; i++) {
            if (inorder[i] == root.val) {
                inIndex = i;
            }
        }
        root.left = helper(preStart + 1, inStart, inIndex - 1, preorder, inorder);
        root.right = helper(preStart + inIndex - inStart + 1, inIndex + 1, inEnd, preorder, inorder);
        return root;
    }
}
