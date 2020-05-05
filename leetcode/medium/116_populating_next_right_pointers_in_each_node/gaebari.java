// https://leetcode.com/problems/populating-next-right-pointers-in-each-node
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Populating Next Right Pointers in Each Node.
// Memory Usage: 39.4 MB, less than 6.35% of Java online submissions for Populating Next Right Pointers in Each Node.

/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        //dfs를 통해서 next에 해당하는 node를 구한다. level 1의 next는 항상 null 임으로 null로 시작한다.
        dfs(root, null);
        return root;
    }

    private void dfs(Node curr, Node next) {
        // current node가 null 이면 트리를 넘어간 것이므로 return
        if (curr == null) return;
        // current node는 넘겨받은 node로 대입한다.
        curr.next = next;
        //current node의 left node의 next값은 항상 right node 의 값이다.
        dfs(curr.left, curr.right);
        // current node의 next가 존재하지 않으면 null을, 아니라면 next의 left값을 넣어준다.
        dfs(curr.right, curr.next == null ? null : curr.next.left);
    }
}