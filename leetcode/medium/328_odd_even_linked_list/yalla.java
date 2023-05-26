// https://leetcode.com/problems/odd-even-linked-list/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Odd Even Linked List.
// Memory Usage: 38.3 MB, less than 97.15% of Java online submissions for Odd Even Linked List.

class Solution {
	public ListNode oddEvenList(ListNode head) {
		if(head == null || head.next == null) return head;

		ListNode odd = head;
		ListNode even = head.next;
		ListNode evenHead = even;

		while(even != null && even.next != null){
			odd.next = odd.next.next;
			even.next = even.next.next;
			odd = odd.next;
			even = even.next;
		}
		odd.next = evenHead;
		return head;
	}
}