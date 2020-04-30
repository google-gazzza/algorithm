// https://leetcode.com/problems/binary-tree-level-order-traversal
// Runtime: 1 ms, faster than 56.84% of Java online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 39.8 MB, less than 5.33% of Java online submissions for Binary Tree Level Order Traversal.

class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        //levelOrder를 순회할 때 사요할 qeueu
        Queue<TreeNode> queue = new LinkedList<TreeNode>();
        //결과값을 저장할 list
        List<List<Integer>> list = new ArrayList<List<Integer>>();

        if ( root == null ) return list;

        //순회 시작전에 시작점을 초기화해준다.
        queue.offer(root);
        //levelOrder 실행
        while(!queue.isEmpty()) {
            List<Integer> innerList = new ArrayList<Integer>();
            // innerList 안에 level만큼씩 값을 저장해준다.
            int level = queue.size();
            //node 를 순회하면서 하위노드을 체크하고 현재 node의 값을 저장한다.
            for(int i = 0; i < level; i++) {
                if(queue.peek().left != null) queue.offer(queue.peek().left);
                if(queue.peek().right != null) queue.offer(queue.peek().right);
                innerList.add(queue.poll( ).val);
            }
            //현재 level에 해당하는 결과값을 list에 또 저장한다.
            list.add(innerList);
        }
        return list;
    }
}