//https://leetcode.com/problems/reverse-linked-list/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Reverse Linked List.
//Memory Usage: 38.2 MB, less than 5.04% of Java online submissions for Reverse Linked List.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode n = null, t = null;
        while (head != null) {
            t = head.next;
            head.next = n;
            n = head;
            head = t;
        }
        return n;
    }
}