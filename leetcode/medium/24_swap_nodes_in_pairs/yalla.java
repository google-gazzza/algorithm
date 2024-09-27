// https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Swap Nodes in Pairs.
// Memory Usage: 36.5 MB, less than 64.30% of Java online submissions for Swap Nodes in Pairs.
class Solution {
	public ListNode swapPairs(ListNode head) {
		if(head == null || head.next == null) return head;

		ListNode nextHead = head.next;
		ListNode nextHeadNext = nextHead.next;

		nextHead.next = head;
		head.next = swapPairs(nextHeadNext);
		return nextHead;
	}
}