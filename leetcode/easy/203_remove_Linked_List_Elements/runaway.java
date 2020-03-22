// https://leetcode.com/problems/remove-linked-list-elements/
// Runtime: 1 ms, faster than 94.44% of Java online submissions for Remove Linked List Elements.
// Memory Usage: 42.3 MB, less than 6.35% of Java online submissions for Remove Linked List Elements.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        while (head != null && head.val == val) {
            head = head.next;
        }
        if (head == null) return head;
        
        ListNode prev = head;
        ListNode node = head.next;
        while (node != null) {
            if (node.val == val) 
                prev.next = node.next;
            else
                prev = node;
            node = node.next;
        }
        return head;
    }
}