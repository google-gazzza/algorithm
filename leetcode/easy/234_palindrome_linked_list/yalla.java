// https://leetcode.com/problems/palindrome-linked-list/submissions/
// Runtime: 4 ms, faster than 51.11% of Java online submissions for Palindrome Linked List.
// Memory Usage: 48.9 MB, less than 37.64% of Java online submissions for Palindrome Linked List.

class Solution {
	public boolean isPalindrome(ListNode head) {
		ListNode walker = head;
		ListNode runner = head;

		while(runner !=null && runner.next != null){
			walker = walker.next;
			runner = runner.next.next;
		}

		if(runner != null) walker = walker.next;

		walker = reverse(walker);
		runner = head;

		while(walker != null){
			if(walker.val != runner.val) return false;
			walker = walker.next;
			runner = runner.next;
		}
		return true;
	}


	private ListNode reverse(ListNode head){
		ListNode before = null;
		while (head != null) {
			ListNode after = head.next;
			head.next = before;
			before = head;
			head = after;
		}
		return before;
	}
}