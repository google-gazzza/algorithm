// https://leetcode.com/problems/delete-node-in-a-linked-list/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Delete Node in a Linked List.
// Memory Usage: 38.3 MB, less than 70.63% of Java online submissions for Delete Node in a Linked List.
class Solution {
	public void deleteNode(ListNode node) {
		node.val = node.next.val;
		node.next = node.next.next;
	}
}