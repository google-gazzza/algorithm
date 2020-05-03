//https://leetcode.com/problems/binary-tree-level-order-traversal
//Runtime: 2 ms, faster than 9.55% of Java online submissions for Binary Tree Zigzag Level Order Traversal.
//Memory Usage: 39.8 MB, less than 5.77% of Java online submissions for Binary Tree Zigzag Level Order Traversal.

class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        // binary-tree-level-order-traversal 를 기준으로 한다.
        List<List<Integer>> res = new ArrayList<>();
        if (root == null) return res;

        Queue<TreeNode> queue = new LinkedList<>();

        queue.add(root);
        boolean zigzag = false;
        while (!queue.isEmpty()) {
            List<Integer> level = new ArrayList<>();
            int cnt = queue.size();
            for (int i = 0; i < cnt; i++) {
                TreeNode node = queue.poll();
                // 지그재그로 0부터 채운다.
                if (zigzag) {
                    level.add(0, node.val);
                }
                else {
                    level.add(node.val);
                }
                if (node.left != null) {
                    queue.add(node.left);
                }
                if (node.right != null) {
                    queue.add(node.right);
                }
            }
            res.add(level);
            zigzag = !zigzag;
        }
        return res;
    }
}
