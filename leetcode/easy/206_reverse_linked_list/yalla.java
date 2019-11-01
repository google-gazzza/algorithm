// https://leetcode.com/problems/reverse-linked-list/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Reverse Linked List.
// Memory Usage: 37 MB, less than 98.92% of Java online submissions for Reverse Linked List.

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
    if (head == null || head.next == null) return head;
    ListNode listNode = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return listNode;
  }
}