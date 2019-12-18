// https://leetcode.com/problems/linked-list-cycle/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Linked List Cycle.
// Memory Usage: 37.4 MB, less than 98.57% of Java online submissions for Linked List Cycle.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        ListNode n1 = head;
        ListNode n2 = head;
        
        while (n1 != null && n2 != null) {
            if (n2.next == null) return false;
            n1 = n1.next;
            n2 = n2.next.next;
            if (n1 == n2) return true;
        }
        
        return false;
    }
}