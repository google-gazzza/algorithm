// https://leetcode.com/problems/linked-list-cycle
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Linked List Cycle.
// Memory Usage: 40.1 MB, less than 34.59% of Java online submissions for Linked List Cycle.

public class Solution {
	public boolean hasCycle(ListNode head) {
		ListNode runner = head;
		ListNode walker = head;

		while(runner !=null && walker != null){
			runner = runner.next;
			if(runner != null) {
				runner = runner.next;
				walker = walker.next;

				if(runner == walker){
					break;
				}
			}else{
				break;
			}
		}

		if(runner == null) return false;

		return true;
	}
}