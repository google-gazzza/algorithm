// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 36.5 MB, less than 100.00% of Java online submissions for Remove Duplicates from Sorted List.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        
        ListNode prev = head;
        ListNode node = head.next;
        
        while(node != null) {
            if (prev.val == node.val) {
                prev.next = node.next;
            } else {
                prev = node;
            }
            node = node.next;
        }
        
        return head;
    }
}